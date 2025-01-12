// filtering items
  // Sample event data
  const events = [
    { id: 1, name: 'AI Conference', category: 'conference', date: '2025-02-15' },
    { id: 2, name: 'Creative Design Workshop', category: 'workshop', date: '2025-01-25' },
    { id: 3, name: 'Marketing Webinar', category: 'webinar', date: '2025-03-05' },
    { id: 4, name: 'Health and Wellness Seminar', category: 'seminar', date: '2025-01-30' },
    { id: 5, name: 'Tech Innovations Conference', category: 'conference', date: '2025-02-22' },
    { id: 6, name: 'SEO Workshop', category: 'workshop', date: '2025-03-10' }
  ];
  
  // DOM elements
  const categoryFilter = document.getElementById('category');
  const dateFilter = document.getElementById('date');
  const applyFiltersButton = document.getElementById('applyFilters');
  const eventList = document.getElementById('eventList');
  
  // Function to display events
  function displayEvents(eventsToDisplay) {
    eventList.innerHTML = ''; // Clear the current event list
    eventsToDisplay.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.textContent = `${event.name} - ${event.category} - ${event.date}`;
        eventList.appendChild(eventItem);
    });
  }
  
  // Function to apply filters
  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedDate = dateFilter.value;
  
    // Filter events based on category and date
    const filteredEvents = events.filter(event => {
        const isCategoryMatch = selectedCategory ? event.category === selectedCategory : true;
        const isDateMatch = selectedDate ? event.date === selectedDate : true;
        return isCategoryMatch && isDateMatch;
    });
  
    // Display filtered events
    displayEvents(filteredEvents);
  }
  
  // Initial load: Display all events
  displayEvents(events);
  
  // Event listener for "Apply Filters" button
  applyFiltersButton.addEventListener('click', applyFilters);
  