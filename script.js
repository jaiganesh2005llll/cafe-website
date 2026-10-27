const menu = {
  coffee: [["Espresso","Double shot, house blend","3.0"],["Flat white","Silky milk, two shots","4.2"],["Cold brew","Steeped 18 hours","4.5"],["Cardamom latte","Our most-ordered special","5.0"]],
  tea: [["Masala chai","Spiced, simmered, milky","3.8"],["Jasmine green","Loose leaf, by the pot","3.5"],["Hot chocolate","70% dark, real milk","4.2"],["Fresh lime soda","Sweet, salted or plain","3.2"]],
  bakery: [["Butter croissant","Baked before 6 a.m.","3.5"],["Banana walnut loaf","Thick slice, toasted","3.8"],["Avocado toast","Sourdough, chili, lime","7.5"],["Brownie","Fudgy, sea salt","3.5"]]
};
const list = document.getElementById("items");
function show(tab){
  list.innerHTML = menu[tab].map(([n,d,p]) => `<li><b>${n}</b><span>${d}</span><em>${p}</em></li>`).join("");
}
document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); show(b.dataset.tab);
}));
show("coffee");
document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("news").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("msg").textContent = "Subscribed. See you Monday.";
  e.target.reset();
});
