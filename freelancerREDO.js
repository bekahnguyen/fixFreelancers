const body = document.querySelector("body");
heading = document.querySelector("h1");
heading.innerText = "Freelancers Available Now!";
const cashPrice = document.createElement("p");
cashPrice.classList.add("p");

// appending p after the heading makes sure the heading goes first?

const workers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];

const randomWorkers = [
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Brian Mui", price: 50, occupation: "mentor" },
];

const freelancerList = document.querySelector("#freelanceWorkers");

let interval = setInterval(addWorkers, 3000);

function addWorkers() {
  const randomIndex = Math.floor(Math.random() * randomWorkers.length);
  workers.push(randomWorkers[randomIndex]);

  render();
}

addWorkers();

//// how to seperate the values so it doesn't look like a run on sentence???
function render() {
  const list = document.createElement("table");
  const newWorkers = workers.map((worker) => {
    list.innerHTML += `
        <td>
          <tr>${worker.name}</tr>
        </td><span>
     <td><tr>$${worker.price}</tr></td><span>
    <td><tr>${
      worker.occupation[0].toUpperCase() + worker.occupation.slice(1)
    }<span>`;

    //price function-- next time write code outside of render function and just call it?

    let price = getPrice();

    function getPrice() {
      let totalPrice = 0;
      let length = workers.length;
      let money = workers.map((worker) => (totalPrice += worker.price));
      console.log(totalPrice);
      return totalPrice;

      totalPrice = 0;
    }

    //i know this part is not correct but I just could not figure this out.
    //reduce/map/for. just not sure. maybe we can go over sometime.
    cashPrice.textContent = `The going rate is $${Math.round(
      getPrice() / workers.length
    )}`;
    heading.append(cashPrice);

    //stop interval from going forever ever
    // was i suppose to restart it again? wasn't sure.

    if (workers.length == 10) {
      clearInterval(interval);
    }

    return list;
  });

  freelancerList.replaceChildren(...newWorkers);
}
