function curr_time() {
  const today = new Date();
  let twelve_hrs =
    today.getHours() < 12 ? today.getHours() : 12 - (24 - today.getHours());
  twelve_hrs = twelve_hrs == 0 ? 12 : twelve_hrs;
  const hrs = twelve_hrs.toString().padStart(2, "0");
  const mints = today.getMinutes().toString().padStart(2, "0");
  const left_secnds = Math.floor(today.getSeconds() / 10).toString();
  const right_secnds = (today.getSeconds() % 10).toString();
  if (right_secnds == 0) {
    document.querySelector(".left_secs").classList.add("animate");
  } else {
    document.querySelector(".left_secs").classList.remove("animate");
  }

  //set AM and PM
  const ampmtime = today.getHours() < 12 ? "AM" : "PM";

  document.querySelector(".hours").innerHTML = hrs;
  document.querySelector(".mins").innerHTML = mints;
  document.querySelector(".left_secs").innerHTML = left_secnds;
  document.querySelector(".right_secs").innerHTML = right_secnds;
  document.querySelector(".ampm").innerHTML = ampmtime;
}
setInterval(curr_time, 1000);
