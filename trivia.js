// 🧠 Η πλήρης βάση δεδομένων με σταθερή σειρά ερωτήσεων
const triviaData = [
    {
        question: "Σε ποιο νησί των Κυκλάδων γυρίστηκε η διάσημη ταινία «Το Απέραντο Γαλάζιο» (The Big Blue);",
        answers: ["Μήλος", "Αμοργός", "Φολέγανδρος", "Σαντορίνη"],
        correctIndex: 1 // Αμοργός
    },
    {
        question: "Ποιο νησί φημίζεται για τη «λαδένια», την παραδοσιακή ελληνική πίτσα;",
        answers: ["Κίμωλος", "Σίφνος", "Κύθνος", "Σέριφος"],
        correctIndex: 0 // Κίμωλος
    },
    {
        question: "Ποιο νησί των Κυκλάδων είναι παγκοσμίως γνωστό ως η πατρίδα του Νικόλαου Τσελεμεντέ;",
        answers: ["Τήνος", "Νάξος", "Σίφνος", "Πάρος"],
        correctIndex: 2 // Σίφνος
    },
    {
        question: "Ποια είναι η πρωτεύουσα των Κυκλάδων;",
        answers: ["Η Χώρα της Νάξου", "Η Παροικιά της Πάρου", "Η Ερμούπολη της Σύρου", "Η Χώρα της Μυκόνου"],
        correctIndex: 2 // Η Ερμούπολη της Σύρου
    },
    {
        question: "Πώς προήλθε η ονομασία Κυκλάδες;",
        answers: [
            "Από το κυκλικό σχήμα που έχουν τα περισσότερα νησιά του συμπλέγματος", 
            "Από το όνομα του μυθικού βασιλιά Κυκλάδα, γιου του θεού Απόλλωνα", 
            "Από την κυκλική τους διάταξη γύρω από το ιερό νησί της Δήλου", 
            "Από τις ισχυρές κυκλικές δίνες που δημιουργούνται στα νερά του Αιγαίου"
        ],
        correctIndex: 2 
    },
    {
        question: "Ποιο από τα παρακάτω νησιά δεν ανήκει στις Κυκλάδες;",
        answers: ["Η Σίκινος", "Η Αστυπάλαια", "Η Σχοινούσα", "Η Ηρακλειά"],
        correctIndex: 1 // Η Αστυπάλαια
    },
    {
        question: "Ποιο είναι το μεγαλύτερο νησί των Κυκλάδων;",
        answers: ["Η Νάξος", "Η Πάρος", "Η Σαντορίνη", "Η Άνδρος"],
        correctIndex: 0 // Η Νάξος
    },
    {
        question: "Ποιο είναι το μεγαλύτερο ακατοίκητο νησί των Κυκλάδων;",
        answers: ["Πολύαιγος", "Κέρος", "Αντίμηλος", "Ρήνεια"],
        correctIndex: 0 // Πολύαιγος
    },
        {
        question: "Σε ποιο νησί των Κυκλάδων βρίσκεται η παγκοσμίως διάσημη παραλία «Κολώνα», η οποία είναι μια στενή λωρίδα άμμου που ενώνει δύο στεριές;",
        answers: ["Κύθνος", "Σέριφος", "Μήλος", "Σίφνος"],
        correctIndex: 0 // Κύθνος
    },
    {
        question: "Ποιο νησί των Κυκλάδων φημίζεται για το «μαστέλο» (παραδοσιακό αρνάκι ή κατσικάκι ψημένο σε πήλινο) και τη διάσημη ρεβιθάδα του;",
        answers: ["Τήνος", "Σίφνος", "Νάξος", "Άνδρος"],
        correctIndex: 1 // Σίφνος
    }

];

let currentTriviaIndex = 0;
let userScore = 0;
let canAnswer = true;
let currentAnswersMapped = []; 

let questionEl, answersEl, progressEl, quizEl, resultEl, scoreEl, feedbackEl, nextBtnEl;

window.onload = function() {
    questionEl = document.getElementById("trivia-question");
    answersEl = document.getElementById("trivia-answers");
    progressEl = document.getElementById("progress-text");
    quizEl = document.getElementById("trivia-section");
    resultEl = document.getElementById("trivia-result");
    scoreEl = document.getElementById("score-display");
    feedbackEl = document.getElementById("feedback");
    nextBtnEl = document.getElementById("next-question-btn");

    if (nextBtnEl) {
        nextBtnEl.addEventListener("click", goToNextQuestion);
    }

    startTrivia();
};

// 🔑 ΔΙΟΡΘΩΜΕΝΟΣ ΑΛΓΟΡΙΘΜΟΣ ΑΝΑΚΑΤΕΜΑΤΟΣ: Δουλεύει με καθαρά αντίγραφα χωρίς bugs
function shuffleAnswers(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Ανταλλαγή στοιχείων με ασφαλή τρόπο
        let temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startTrivia() {
    currentTriviaIndex = 0;
    userScore = 0;
    if(quizEl) quizEl.classList.remove("hide");
    if(resultEl) resultEl.classList.add("hide");
    showTriviaQuestion();
}
//--------------------------------------------------------------------------------------
function showTriviaQuestion() {
    canAnswer = true;
    answersEl.innerHTML = "";
    if(nextBtnEl) {
        nextBtnEl.classList.add("hide"); 
        nextBtnEl.innerText = "Επόμενη Ερώτηση"; // 🔑 Επαναφορά του αρχικού κειμένου σε κάθε νέα ερώτηση
    }
    
    let currentQ = triviaData[currentTriviaIndex];
    
    progressEl.innerText = `Ερώτηση ${currentTriviaIndex + 1} από ${triviaData.length}`;
    questionEl.innerText = `${currentTriviaIndex + 1}. ${currentQ.question}`;

    let mapped = [];
    for (let i = 0; i < currentQ.answers.length; i++) {
        mapped.push({
            text: currentQ.answers[i],
            isCorrect: i === currentQ.correctIndex
        });
    }
    
    currentAnswersMapped = shuffleAnswers(mapped);

    currentAnswersMapped.forEach(ans => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.addEventListener("click", () => checkAnswer(ans.isCorrect, button));
        answersEl.appendChild(button);
    });
}

function checkAnswer(isCorrect, clickedButton) {
    if (!canAnswer) return;
    canAnswer = false;

    const allButtons = answersEl.getElementsByTagName("button");

    if (isCorrect) {
        userScore++;
        clickedButton.classList.add("correct-ans");
    } else {
        clickedButton.classList.add("wrong-ans");
        currentAnswersMapped.forEach((ans, idx) => {
            if (ans.isCorrect) {
                allButtons[idx].classList.add("correct-ans");
            }
        });
    }

    // 🔑 Η ΔΙΟΡΘΩΣΗ: Έλεγχος αν είναι η τελευταία ερώτηση
    if (nextBtnEl) {
        if (currentTriviaIndex === triviaData.length - 1) {
            nextBtnEl.innerText = "Δες το Σκορ σου 📊"; // Αλλάζει το κείμενο στο τέλος
        }
        nextBtnEl.classList.remove("hide"); // Εμφανίζεται το κουμπί
    }
}

   
//----------------------------------------------------------------------------------------
function goToNextQuestion() {
    currentTriviaIndex++;
    if (currentTriviaIndex < triviaData.length) {
        showTriviaQuestion();
    } else {
        showTriviaResults();
    }
}

function showTriviaResults() {
    // 🔑 Η ΔΙΟΡΘΩΣΗ: Κρύβουμε ρητά το κουμπί "Δες το σκορ σου" για να μην ξεμείνει στην οθόνη
    if (nextBtnEl) {
        nextBtnEl.classList.add("hide");
    }

    if (quizEl) quizEl.classList.add("hide");
    if (resultEl) resultEl.classList.remove("hide");
    
    progressEl.innerText = "Το κουίζ ολοκληρώθηκε!";
    scoreEl.innerText = `${userScore} / ${triviaData.length}`;

    let percentage = (userScore / triviaData.length) * 100;
    if (percentage === 100) {
        feedbackEl.innerText = "👑 Είσαι ο απόλυτος γκουρού των Κυκλάδων! Άριστα!";
    } else if (percentage >= 60) {
        feedbackEl.innerText = "🚢 Πολύ καλή προσπάθεια! Ξέρεις καλά το Αιγαίο.";
    } else {
        feedbackEl.innerText = "🎒 Χρειάζεσαι επειγόντως διακοπές στις Κυκλάδες για εξάσκηση!";
    }
}


function restartTrivia() {
    startTrivia();
}
