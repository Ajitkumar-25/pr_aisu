

const backendData = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio!',
      date: '2023-06-14',
      time: '2:30 PM',
      category: 'Category 2',
      description: 'Description for Card 2'
    },
    {
      title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolorum, recusandae voluptatem doloremque quod amet!',
      date: '2023-06-14',
      time: '11:30 AM',
      category: 'Category 4',
      description: 'Description for Card 4'
    },
    {
      title: 'ALL INDIA STUDENTS UNION (AISU) DEMANDS DEFERMENT OF NEET UG EXAM TO PROVIDE ADEQUATE TIME FOR PREPARATION',
      date: '2023-06-15',
      time: '9:00 AM',
      category: 'Category 5',
      description: 'Description for Card 5'
    },
    {
      title: 'Nationwide Candle March Protest by ALL INDIA STUDENTS UNION against Anti-NEET attitude of Government of India',
      date: '2023-06-16',
      time: '3:00 PM',
      category: 'Category 6',
      description: 'Description for Card 6'
    },
    {
      title: 'AISU, Students & Parents Demand Fairness and Accountability in JEE Examinations',
      date: '2023-06-17',
      time: '12:00 PM',
      category: 'Category 7',
      description: 'Description for Card 7'
    }
  ];
  
  
  
  
  
  
  let slideIndex = 0;
  let timer;
  
  function createCarouselItem(title, date, description) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
  
    const itemTitle = document.createElement('h2');
    itemTitle.textContent = title;
  
    const itemDate = document.createElement('p');
    itemDate.textContent = 'Date: ' + date;
  
    // const itemDescription = document.createElement('p');
    // itemDescription.textContent = description;
  
    item.appendChild(itemTitle);
    item.appendChild(itemDate);
    // item.appendChild(itemDescription);
  
    return item;
  }
  
  function displayCarouselItems() {
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';
  
    // Sort the data based on the date in descending order
    backendData.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    const latestData = backendData.slice(0, 5); // Get the 5 latest data items
  
    latestData.forEach((item) => {
      const carouselItem = createCarouselItem(item.title, item.date);
      carouselInner.appendChild(carouselItem);
    });
  }
  
  function showSlide() {
    const carouselItems = document.getElementsByClassName('carousel-item');
  
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].style.display = 'none';
    }
  
    carouselItems[slideIndex].style.display = 'block';
  }
  
  function prevSlide() {
    const carouselItems = document.getElementsByClassName('carousel-item');
  
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carouselItems.length - 1;
    }
  
    showSlide();
  }
  
  function nextSlide() {
    const carouselItems = document.getElementsByClassName('carousel-item');
  
    slideIndex++;
    if (slideIndex >= carouselItems.length) {
      slideIndex = 0;
    }
  
    showSlide();
  }
  
  function startCarousel() {
    timer = setInterval(() => {
      nextSlide();
    }, 2000); 
  }
  
  function stopCarousel() {
    clearInterval(timer);
  }
  
  document.getElementById('carouselInner').addEventListener('mouseenter', stopCarousel);
  document.getElementById('carouselInner').addEventListener('mouseleave', startCarousel);
  
  displayCarouselItems();
  showSlide();
  startCarousel();
  
  // Function to create a card element
  function createCard(title, date, time, category, description) {
    const card = document.createElement('div');
    card.className = 'card';
  
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
  
    const cardDate = document.createElement('p');
    cardDate.className = 'card-date';
    cardDate.textContent = `Date: ` + date;
  
    const cardTime = document.createElement('p');
    cardTime.className = 'card-time';
    cardTime.textContent = 'Time: ' + time;
  
    // const cardCategory = document.createElement('p');
    // cardCategory.className = 'card-category';
    // cardCategory.textContent = 'Category: ' + category;
  
    // const cardDescription = document.createElement('p');
    // cardDescription.className = 'card-description';
    // cardDescription.textContent = description;
  
  
    const cardButton = document.createElement('button');
    cardButton.className = 'card-button';
    cardButton.textContent = 'Read More';
    cardButton.addEventListener('click', function() {
      // Handle button click event
      console.log('Button clicked for ' + title);
    });
  
    card.appendChild(cardTitle);
    card.appendChild(cardDate);
    card.appendChild(cardTime);
    // card.appendChild(cardCategory);
    // card.appendChild(cardDescription);
    card.appendChild(cardButton);
  
    return card;
  }
  
  // Function to fetch data from the backend and display it on the page
  function fetchDataAndDisplay() {
    const cardContainer = document.getElementById('card-container');
  
    // Sort the data based on the date in ascending order
    backendData.sort((a, b) => {
      const dateTimeA = new Date(a.date + ' ' + a.time);
      const dateTimeB = new Date(b.date + ' ' + b.time);
      return dateTimeB - dateTimeA;
    });
  
    // Create and append cards for each data item
    backendData.forEach((item) => {
      const card = createCard(item.title, item.date, item.time);
      cardContainer.appendChild(card);
    });
  }
  
  // Fetch data and display when the page loads
  window.onload = fetchDataAndDisplay;
  