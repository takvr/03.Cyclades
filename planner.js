document.addEventListener("DOMContentLoaded", function() {
    const checkboxesContainer = document.getElementById("islands-checkboxes");
    const itineraryResults = document.getElementById("itinerary-results");
    const summaryBox = document.getElementById("planner-summary");
    const packingBox = document.getElementById("packing-section");

    if (typeof islandData === 'undefined') {
        console.error("Το data.js δεν έχει φορτώσει!");
        return;
    }

    // 1. Δημιουργούμε δυναμικά τα Checkboxes για όλα τα νησιά (με αλφαβητική σειρά)
    const sortedIds = Object.keys(islandData).sort((a, b) => islandData[a].name.localeCompare(islandData[b].name));
    
    sortedIds.forEach(id => {
        const island = islandData[id];
        const div = document.createElement("div");
        div.className = "checkbox-item";
        
        div.innerHTML = `
            <div class="check-left">
                <input type="checkbox" value="${id}" class="island-checkbox" id="check-${id}">
                <label style="cursor:pointer;" for="check-${id}">${island.name}</label>
            </div>
            <select class="days-select" id="days-${id}">
                <option value="2">2 μέρες</option>
                <option value="3" selected>3 μέρες</option>
                <option value="4">4 μέρες</option>
                <option value="5">5+ μέρες</option>
            </select>
        `;
        checkboxesContainer.appendChild(div);
    });

    // Ακούμε αλλαγές είτε στα checkboxes είτε στα dropdowns ημερών
    checkboxesContainer.addEventListener("change", updateItinerary);

    function updateItinerary() {
        const checkedBoxes = document.querySelectorAll(".island-checkbox:checked");
        
        if (checkedBoxes.length === 0) {
            if (summaryBox) summaryBox.classList.add("hide");
            if (packingBox) packingBox.classList.add("hide");
            itineraryResults.innerHTML = `
                <div class="empty-plan-message">
                    🚢 Δεν έχεις επιλέξει νησιά ακόμα. Τσέκαρε μερικά νησιά από την αριστερή λίστα για να δημιουργήσεις το δρομολόγιό σου!
                </div>
            `;
            return;
        }

        if (summaryBox) summaryBox.classList.remove("hide");
        if (packingBox) packingBox.classList.remove("hide");
        itineraryResults.innerHTML = "";

        let totalDays = 0;
        let totalBeaches = 0;
        let totalTips = 0;
        let hasLongFerry = false;
        let hasMediumFerry = false;

        // 2. Δημιουργούμε την κάρτα για κάθε επιλεγμένο νησί
        checkedBoxes.forEach((box, index) => {
            const id = box.value;
            const island = islandData[id];
            
            // Διαβάζουμε τις μέρες από το αντίστοιχο Select dropdown
            const daysSelect = document.getElementById(`days-${id}`);
            const selectedDays = parseInt(daysSelect.value);
            totalDays += selectedDays;
            
            // Μετράμε παραλίες και tips για τα στατιστικά
            totalBeaches += island.beaches.length;
            totalTips += island.tips.length;

            // Ελέγχουμε τη διάρκεια του πλοίου για τα στατιστικά
            if (island.dist.includes("6-7") || island.dist.includes("7-9") || island.dist.includes("7 ώρες") || island.dist.includes("9 ώρες")) {
                hasLongFerry = true;
            } else if (island.dist.includes("4-6") || island.dist.includes("4 ώρες") || island.dist.includes("4.5 ώρες")) {
                hasMediumFerry = true;
            }

            // Παράγουμε το HTML για τις παραλίες
            let beachesHTML = "";
            island.beaches.forEach(b => beachesHTML += `<li>${b}</li>`);
            
            // Παράγουμε το HTML για τα tips
            let tipsHTML = "";
            island.tips.forEach(t => tipsHTML += `<li>${t}</li>`);

            // 🔑 3. Η ΔΙΟΡΘΩΣΗ ΓΙΑ ΤΑ ΚΟΝΤΙΝΑ ΝΗΣΙΑ: Έλεγχος αν υπάρχουν στο data.js
            let neighborsHTML = "";
            if (island.neighbors && island.neighbors.length > 0) {
                neighborsHTML = `<p style="font-size: 13.5px; color: #2a9d8f; margin-top: 8px; font-weight: 600;">
                    🚢 Συνδυάζεται εύκολα με: ${island.neighbors.join(", ")}
                </p>`;
            }

            // Links για Ferryhopper και Booking
            const ferryLink = `https://ferryhopper.com`;
            const bookingLink = `https://booking.com`;

            const card = document.createElement("div");
            card.className = "planned-island-card";

            card.innerHTML = `
                <h3>
                    <span>Στάση ${index + 1}: ${island.name} 🏝️ (${selectedDays} βράδια)</span>
                    <span style="font-size: 14px; color: #6c757d; font-weight: normal;">${island.dist}</span>
                </h3>
                <p style="font-size: 14px; color: #6c757d; font-style: italic; margin-bottom: 5px;">Vibe: ${island.vibe}</p>
                
                <!-- Εμφάνιση Κοντινών Νησιών -->
                ${neighborsHTML}
                
                <p style="font-size: 15px; line-height: 1.6; color: #495057; margin-top: 15px; margin-bottom: 15px;">${island.desc}</p>
                
                <div class="planned-section">
                    <h4>🏖— Κορυφαίες Παραλίες:</h4>
                    <ul>${beachesHTML}</ul>
                </div>
                
                <div class="planned-section" style="margin-top: 10px;">
                    <h4>💡 Insider Tips:</h4>
                    <ul>${tipsHTML}</ul>
                </div>
                
                <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="${ferryLink}" target="_blank" class="travel-btn" style="background-color: #ff5a5f;">🚢 Εισιτήρια για ${island.name}</a>
                    <a href="${bookingLink}" target="_blank" class="travel-btn" style="background-color: #003580;">🏢 Ξενοδοχεία σε ${island.name}</a>
                    <a href="island.html?name=${id}" target="_blank" style="align-self: center; font-size: 13px; color: #0077b6; margin-left: auto;">Αναλυτικός Οδηγός →</a>
                </div>
            `;
            
            itineraryResults.appendChild(card);
        });

        // 4. Ενημέρωση των Top Στατιστικών
        document.getElementById("sum-islands").innerText = checkedBoxes.length;
        document.getElementById("sum-days").innerText = totalDays;
        document.getElementById("sum-experiences").innerText = `${totalBeaches + totalTips}`;

        let ferryEstimate = "Ξεκούραστες ⚡";
        if (hasLongFerry) {
            ferryEstimate = "Μεγάλες Αποστάσεις 🚢";
        } else if (hasMediumFerry) {
            ferryEstimate = "Μεσαίες Διαδρομές 🌊";
        }
        document.getElementById("sum-ferry").innerText = ferryEstimate;
    }
});
