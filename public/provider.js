async function loadSlots() {
    const list = document.getElementById("slotsList");
    list.innerHTML = "<li>Loading...</li>";
  
    const response = await fetch("/api/slots");
    const data = await response.json();
  
    list.innerHTML = "";
  
    data.forEach(slot => {
      const li = document.createElement("li");
      li.textContent = `${slot.startTime} - ${slot.endTime} (${slot.status})`;
      list.appendChild(li);
    });
  }
  
  document
    .getElementById("loadSlotsBtn")
    .addEventListener("click", loadSlots);
  
  