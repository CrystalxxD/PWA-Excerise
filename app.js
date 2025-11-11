function saveNote() {
    const noteText = document.getElementById('note').value;
    if (noteText.trim() === '') return;

    const savedNotes = document.getElementById('saved-notes');
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.textContent = noteText;
    savedNotes.prepend(noteCard);

    document.getElementById('note').value = '';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('ServiceWorker registered!');
        })
        .catch((error) => {
            console.log('ServiceWorker registration failed:', error);
        });
}