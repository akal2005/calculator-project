function append(val) {
  const input = document.getElementById('display');
  input.value += val;
}

function clearInput() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
