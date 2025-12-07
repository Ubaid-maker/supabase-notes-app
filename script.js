// Your Supabase keys
const SUPABASE_URL = "https://kkewetsmprvwobnnfjxo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZXdldHNtcHJ2d29ibm5manhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMTE1MjIsImV4cCI6MjA4MDU4NzUyMn0.uw_oqUL1XXFHfbXfjqBxoqW8fDN1axe9urXgdXWfM8M";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("id", { ascending: false });

  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  data.forEach(note => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note.content}
      <span class="delete-btn" onclick="deleteNote(${note.id})">❌</span>
    `;
    notesList.appendChild(div);
  });
}

async function addNote() {
  const content = document.getElementById("noteInput").value;
  if (!content.trim()) return alert("Write something!");

  const { error } = await supabase
    .from("notes")
    .insert([{ content }]);

  document.getElementById("noteInput").value = "";
  loadNotes();
}

async function deleteNote(id) {
  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id);

  loadNotes();
}

loadNotes();
