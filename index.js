let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count = count - 1;
  document.getElementById("countLabel1").innerHTML = count;
};
document.getElementById("ResetBtn").onclick = function () {
  count = count - 1;
  document.getElementById("countLabel1").innerHTML = count;
};
document.getElementById("IncreaseBtn").onclick = function () {
  count = count + 1;
  document.getElementById("countLabel1").innerHTML = count;
};
