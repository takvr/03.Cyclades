// Οι 9 στοχευμένες ερωτήσεις για τα 23 νησιά των Κυκλάδων
const quizData = [
    {
        question: "1. Ποιο είναι το στυλ της παρέας σου;",
        answers: [
            { text: "❤️ Ρομαντικό ταξίδι με το ταίρι μου", points: { Σαντορίνη: 3, Μήλος: 3, Φολέγανδρος: 3, Κίμωλος: 2, Σίκινος: 2 } },
            { text: "🎉 Μεγάλη παρέα φίλων για χαμό και διασκέδαση", points: { Μύκονος: 3, Ίος: 3, Πάρος: 3, Αντίπαρος: 2 } },
            { text: "👨‍👩‍👧‍👦 Οικογένεια με παιδιά", points: { Νάξος: 3, Σύρος: 3, Άνδρος: 3, Κέα: 2, Κύθνος: 2 } },
            { text: "🎒 Solo ταξιδιώτης ή 1-2 κολλητοί για αποσύνδεση", points: { Αμοργός: 3, Ανάφη: 3, Δονούσα: 3, Κουφονήσια: 2, Σχοινούσα: 2, Ηρακλειά: 2, Σέριφος: 2, Τήνος: 1, Σίφνος: 1 } }
        ]
    },
    {
        question: "2. Πώς φαντάζεσαι τα βράδια σου;",
        answers: [
            { text: "🕺 Clubbing και χορός μέχρι το πρωί", points: { Μύκονος: 3, Ίος: 3, Πάρος: 2 } },
            { text: "🍷 Κοκτέιλ ή κρασί σε bars με ωραία θέα/ατμόσφαιρα", points: { Σαντορίνη: 3, Αντίπαρος: 3, Φολέγανδρος: 3, Μήλος: 2, Σέριφος: 2 } },
            { text: "🍲 Φαγητό σε παραδοσιακές ταβέρνες και βόλτα σε γραφικά σοκάκια", points: { Τήνος: 3, Σίφνος: 3, Κύθνος: 3, Σύρος: 2, Άνδρος: 2, Κέα: 2 } },
            { text: "🌌 Μπύρες στην πλατεία της Χώρας ή στην αμμουδιά", points: { Αμοργός: 3, Ανάφη: 3, Δονούσα: 3, Σχοινούσα: 2, Ηρακλειά: 2, Κίμωλος: 2, Σίκινος: 2, Κουφονήσια: 1 } }
        ]
    },
    {
        question: "3. Τι είδους παραλία σε μαγεύει περισσότερο;",
        answers: [
            { text: "🏖️ Οργανωμένες με beach bars, ξαπλώστρες and μουσική", points: { Μύκονος: 3, Πάρος: 3, Ίος: 3, Αντίπαρος: 1 } },
            { text: "📸 Εξωτικές, με περίεργα πετρώματα και σπηλιές", points: { Μήλος: 3, Κίμωλος: 3, Σαντορίνη: 1 } },
            { text: "🌊 Απέραντες χρυσές αμμουδιές με ρηχά, πεντακάθαρα νερά", points: { Νάξος: 3, Κουφονήσια: 3, Σχοινούσα: 2, Σέριφος: 2, Άνδρος: 2, Κέα: 1 } },
            { text: "🥾 Παρθένες, απομονωμένες (ακόμα κι αν έχει περπάτημα)", points: { Ανάφη: 3, Δονούσα: 3, Ηρακλειά: 3, Σίκινος: 3, Αμοργός: 2, Φολέγανδρος: 2, Κύθνος: 2, Τήνος: 1, Σίφνος: 1 } }
        ]
    },
    {
        question: "4. Ποιο είναι το budget σου για τη διαμονή σου (ανά βράδυ);",
        answers: [
            { text: "💎 Luxury / Premium (Θέλω infinity pools, resort και ανέσεις)", points: { Σαντορίνη: 3, Μύκονος: 3, Αντίπαρος: 1, Πάρος: 1 } },
            { text: "🏢 Mid-range (Ένα όμορφο, περιποιημένο κυκλαδίτικο δωμάτιο)", points: { Πάρος: 2, Νάξος: 2, Μήλος: 2, Σύρος: 2, Άνδρος: 2, Κέα: 2, Τήνος: 1, Σίφνος: 1 } },
            { text: "🏡 Budget-friendly (Απλό, καθαρό δωμάτιο χωρίς περιττές πολυτέλειες)", points: { Τήνος: 3, Κύθνος: 3, Σέριφος: 3, Κίμωλος: 2, Φολέγανδρος: 2, Σίκινος: 2, Ίος: 1, Κουφονήσια: 1 } },
            { text: "⛺ Ελάχιστο (Ελεύθερο ή οργανωμένο Camping / Πολύ φθηνά studios)", points: { Αμοργός: 3, Ανάφη: 3, Δονούσα: 3, Ηρακλειά: 2, Σχοινούσα: 2 } }
        ]
    },
    {
        question: "5. Τι σε ενδιαφέρει να κάνεις εκτός από το να κολυμπάς;",
        answers: [
            { text: "🏛️ Αρχαιολογικούς χώρους, μουσεία και νεοκλασική αρχιτεκτονική", points: { Σύρος: 3, Άνδρος: 3, Μύκονος: 2, Σαντορίνη: 2, Κέα: 1 } },
            { text: "🍯 Να δοκιμάσω κορυφαία τοπική κουζίνα και γαστρονομία", points: { Σίφνος: 3, Τήνος: 3, Νάξος: 3, Κίμωλος: 1 } },
            { text: "🥾 Πεζοπορία σε μονοπάτια, φύση και παλιά μοναστήρια", points: { Αμοργός: 3, Σέριφος: 2, Κύθνος: 2, Φολέγανδρος: 2, Σίκινος: 2, Ανάφη: 1 } },
            { text: "💤 Τίποτα! Θέλω απλά να χαζεύω τη θάλασσα και να ξεκουραστώ", points: { Κουφονήσια: 3, Σχοινούσα: 3, Ηρακλειά: 3, Δονούσα: 3, Ίος: 1, Αντίπαρος: 1, Μήλος: 1 } }
        ]
    },
    {
        question: "6. Πώς προτιμάς να μετακινείσαι στο νησί;",
        answers: [
            { text: "🚗 Με άνεση, σε μεγάλους δρόμους ή με καλό δίκτυο λεωφορείων", points: { Νάξος: 3, Πάρος: 3, Σύρος: 3, Μύκονος: 2, Σαντορίνη: 2, Ίος: 1 } },
            { text: "🛵 Με δικό μου όχημα, δεν με πειράζουν οι στροφές και οι χωματόδρομοι", points: { Άνδρος: 3, Τήνος: 3, Κύθνος: 3, Σέριφος: 2, Αμοργός: 2, Κέα: 2, Μήλος: 1, Σίφνος: 1 } },
            { text: "🚶‍♂️ Με τα πόδια ή με καραβάκια (Θέλω ένα πολύ μικρό νησί)", points: { Κουφονήσια: 3, Αντίπαρος: 3, Σχοινούσα: 3, Ηρακλειά: 3, Δονούσα: 3, Ανάφη: 2, Κίμωλος: 2, Φολέγανδρος: 1, Σίκινος: 1 } }
        ]
    },
    {
        question: "7. Πόση ώρα αντέχεις να είσαι μέσα στο πλοίο;",
        answers: [
            { text: "✈️ Το πολύ 1-3 ώρες (ή εναλλακτικά πάω με αεροπλάνο)", points: { Κέα: 3, Κύθνος: 3, Μύκονος: 2, Σαντορίνη: 2, Νάξος: 2, Πάρος: 2, Σύρος: 1 } },
            { text: "🚢 4-6 ώρες (Μια κλασική, υποφερτή διαδρομή)", points: { Τήνος: 3, Σίφνος: 3, Μήλος: 3, Σέριφος: 3, Άνδρος: 2, Αντίπαρος: 2, Ίος: 2, Κίμωλος: 2, Κουφονήσια: 1 } },
            { text: "🌊 Δεν με νοιάζει, ας είναι και στην άκρη της γραμμής (7+ ώρες)", points: { Αμοργός: 3, Ανάφη: 3, Δονούσα: 3, Φολέγανδρος: 3, Σίκινος: 3, Ηρακλειά: 2, Σχοινούσα: 2 } }
        ]
    },
    {
        question: "8. Πώς φαντάζεσαι τη Χώρα και το τοπίο του νησιού;",
        answers: [
            { text: "⛰️ Επιβλητικά βράχια, κάστρα και Χώρες χτισμένες ψηλά με πολλά σκαλιά", points: { Αμοργός: 3, Φολέγανδρος: 3, Ανάφη: 3, Σέριφος: 2, Σίκινος: 2, Σαντορίνη: 2 } },
            { text: "🏛️ Αρχοντικά σπίτια, λιθόστρωτα και πιο «κλασική» πόλη", points: { Σύρος: 3, Άνδρος: 3, Τήνος: 2, Κέα: 2 } },
            { text: "🏘️ Παραδοσιακά, μικρά, λευκά κυκλαδίτικα σπιτάκια σε πιο ομαλό έδαφος", points: { Μύκονος: 2, Πάρος: 2, Αντίπαρος: 2, Νάξος: 2, Σίφνος: 2, Κύθνος: 2, Κίμωλος: 2 } },
            { text: "⛵ Πολύ μικροί, ψαράδικοι οικισμοί ακριβώς δίπλα στο κύμα", points: { Κουφονήσια: 3, Σχοινούσα: 3, Ηρακλειά: 3, Δονούσα: 3 } }
        ]
    },
    {
        question: "9. Αν έπρεπε να επιλέξεις ΜΟΝΟ ΕΝΑ πράγμα, τι θέλεις οπωσδήποτε να έχει το νησί;",
        answers: [
            { text: "🏘️ Μια πανέμορφη, γραφική και ζωντανή Χώρα για βολτάρισμα", points: { Φολέγανδρος: 3, Αμοργός: 3, Μύκονος: 3, Σύρος: 3, Ανάφη: 2, Σέριφος: 2, Σίφνος: 2, Ίος: 1 } },
            { text: "🏖️ Καταπληκτικές, ονειρικές παραλίες (αμμουδιές ή ιδιαίτερα νερά)", points: { Μήλος: 3, Κουφονήσια: 3, Νάξος: 3, Πάρος: 2, Ίος: 2, Αντίπαρος: 2, Κίμωλος: 2, Δονούσα: 1 } },
            { text: "🥾 Άγρια φύση, μονοπάτια για πεζοπορία και εντυπωσιακά τοπία", points: { Άνδρος: 3, Τήνος: 3, Κέα: 2, Αμοργός: 2, Σέριφος: 1, Κύθνος: 1 } },
            { text: "🌿 Αυθεντικό χαρακτήρα, απόλυτη ηρεμία και χαλαρούς ρυθμούς", points: { Σίκινος: 3, Ηρακλειά: 3, Σχοινούσα: 3, Δονούσα: 2, Ανάφη: 2, Κίμωλος: 2, Κύθνος: 1 } }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {};

// Η λίστα με τα 23 νησιά και οι διαδρομές για τις σελίδες τους
const islandLinks = {
     "Μύκονος": "island.html?name=mykonos",
    "Σαντορίνη": "island.html?name=santorini",
    "Πάρος": "island.html?name=paros",
    "Νάξος": "island.html?name=naxos",
    "Ίος": "island.html?name=ios",
    "Σύρος": "island.html?name=syros",
    "Τήνος": "island.html?name=tinos",
    "Άνδρος": "island.html?name=andros",
    "Σίφνος": "island.html?name=sifnos",
    "Κύθνος": "island.html?name=kythnos",
    "Κέα": "island.html?name=kea",
    "Μήλος": "island.html?name=milos",
    "Αμοργός": "island.html?name=amorgos",
    "Φολέγανδρος": "island.html?name=folegandros",
    "Σέριφος": "island.html?name=serifos",
    "Κίμωλος": "island.html?name=kimolos",
    "Αντίπαρος": "island.html?name=antiparos",
    "Σίκινος": "island.html?name=sikinos",
    "Ανάφη": "island.html?name=anafi",
    "Κουφονήσια": "island.html?name=koufonisia",
    "Δονούσα": "island.html?name=donousa",
    "Σχοινούσα": "island.html?name=schinousa",
    "Ηρακλειά": "island.html?name=irakleia",
    "Θηρασία": "island.html?name=thirasia"

};

const islands = Object.keys(islandLinks);

// Δηλώνουμε τις μεταβλητές παγκόσμια, αλλά θα τις συνδέσουμε ΜΕΣΑ στο window.onload
let questionText, answersBlock, quizSection, resultSection, resultText;

function resetScores() {
    islands.forEach(island => { scores[island] = 0; });
}

function startQuiz() {
    currentQuestionIndex = 0;
    resetScores();
    quizSection.classList.remove("hide");
    resultSection.classList.add("hide");
    showQuestion();
}

function showQuestion() {
    answersBlock.innerHTML = "";
    let currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.points));
        answersBlock.appendChild(button);
    });
}

function selectAnswer(points) {
    for (let island in points) {
        if (scores[island] !== undefined) {
            scores[island] += points[island];
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizSection.classList.add("hide");
    resultSection.classList.remove("hide");
    
    let highestScore = -1;
    for (let island in scores) {
        if (scores[island] > highestScore) {
            highestScore = scores[island];
        }
    }
    
    let winners = [];
    for (let island in scores) {
        if (scores[island] === highestScore) {
            winners.push(island);
        }
    }
    
    let finalWinner = winners[Math.floor(Math.random() * winners.length)];
    let targetLink = islandLinks[finalWinner];
    
    resultText.innerHTML = `<a href="${targetLink}" style="color: #0077b6; text-decoration: underline; cursor: pointer;">${finalWinner}</a>`;
}

function restartQuiz() {
    startQuiz();
}

// 🔑 ΕΔΩ ΕΙΝΑΙ Η ΔΙΟΡΘΩΣΗ: Περιμένουμε να φορτώσει όλο το HTML πρώτα!
window.onload = function() {
    questionText = document.getElementById("question-text");
    answersBlock = document.getElementById("answers-block");
    quizSection = document.getElementById("quiz-section");
    resultSection = document.getElementById("result-section");
    resultText = document.getElementById("result-text");

    startQuiz();
};

// ==========================================
// ⏱️ ΑΥΤΟΜΑΤΗ ΕΝΑΛΛΑΓΗ ΣΕΛΙΔΩΝ FAST FACTS (ΚΑΘΕ 3 ΔΕΥΤΕΡΟΛΕΠΤΑ)
// ==========================================
let currentFactsPage = 1;
const totalFactsPages = 3;

function autoRotateFacts() {
    setInterval(() => {
        // 1. Υπολογισμός της επόμενης σελίδας
        let nextPage = currentFactsPage + 1;
        if (nextPage > totalFactsPages) {
            nextPage = 1;
        }

        // 2. Εντοπισμός των στοιχείων στο HTML
        const currentActivePageEl = document.getElementById(`fact-page-${currentFactsPage}`);
        const nextActivePageEl = document.getElementById(`fact-page-${nextPage}`);
        const currentDot = document.getElementById(`dot-${currentFactsPage}`);
        const nextDot = document.getElementById(`dot-${nextPage}`);

        // 3. Αλλαγή κλάσεων με εφέ Fade
        if (currentActivePageEl && nextActivePageEl) {
            currentActivePageEl.classList.remove("active");
            currentActivePageEl.classList.add("hide");
            
            nextActivePageEl.classList.remove("hide");
            nextActivePageEl.classList.add("active");
        }

        // 4. Ενημέρωση στις τελείες πλοήγησης
        if (currentDot && nextDot) {
            currentDot.classList.remove("active-dot");
            nextDot.classList.add("active-dot");
        }

        // 5. Ενημέρωση του μετρητή
        currentFactsPage = nextPage;
    }, 5000); // 5000 milliseconds = 5 δευτερόλεπτα
}

// 🔑 Εκκίνηση του Slider μόλις φορτώσει πλήρως η σελίδα
window.addEventListener("load", autoRotateFacts);
