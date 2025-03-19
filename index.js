anime({   // Animate the chart container on load
    targets: ".chart-container", 
      duration: 1800,
      opacity: [0, 1],
      scale: [0.5, 1],   
      easing: 'easeInBack',
  });

  let ctx = document.getElementById("pieChart").getContext("2d");

  let pieChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["JavaScript", "Python", "Java", "C++", "PHP"],
      datasets: [
        {
          data: [40, 35, 25, 17, 18],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 205, 86, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Number of Users Across the World",
        },
      },
    },
  });

  setInterval(() => {
    let updatedData = Array(5).fill().map(getRandomValue);
    pieChart.data.datasets[0].data = updatedData;
    pieChart.update();

    // Animate the chart canvas border glow every update
    anime({
      targets: "#pieChart",
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        "0px 0px 20px rgba(0, 255, 255, 0.7)",
        "0px 0px 0px rgba(0, 0, 0, 0)",
      ],
      duration: 1000,
      easing: "easeInOutSine",
    });
  }, 2000);

  const getRandomValue = () => Math.floor(Math.random() * 100);