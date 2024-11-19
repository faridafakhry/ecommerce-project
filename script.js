const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

app.get("/set-cookie", (req, res) => {
  res.header(
    "Set-Cookie",
    `username="john doe"; Path=/; HttpOnly; Secure; SameSite=None;`
  );
  res.status(200).json({ message: "Cookie has been set" });
});

// clear cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.status(200).json({ message: "Cookie has been cleared" });
});
