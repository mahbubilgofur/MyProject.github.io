const input = document.getElementById("input");

let HasilInput = false;

function TambahInput(nilai) {
  if (HasilInput) {
    input.value = "";
    HasilInput = false;
  }
  input.value += nilai;
}

function HapusSemua() {
  input.value = "";
}

function HapusSatu() {
  input.value = input.value.slice(0, -1);
}
function Hitung() {
  try {
    input.value = eval(input.value);
    HasilInput = true;
  } catch {
    input.value = "error";
    HasilInput = true;
  }
}

function toggleNegatif() {
  if (input.value) {
    input.value = input.value.startsWith("-")
      ? input.value.slice(1)
      : "-" + input.value;
  }
}
