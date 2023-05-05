// Initialize array of items to be filtered and displayed
const items = [
  { name: 'Item 1', category: 'option1', price: 'option4', color: 'option7', size: ['small', 'medium'] },
  { name: 'Item 2', category: 'option2', price: 'option5', color: 'option8', size: ['medium', 'large'] },
  { name: 'Item 3', category: 'option3', price: 'option6', color: 'option9', size: ['small', 'large'] },
  { name: 'Item 4', category: 'option1', price: 'option4', color: 'option7', size: ['medium', 'large'] },
  { name: 'Item 5', category: 'option2', price: 'option5', color: 'option8', size: ['small', 'medium'] },
  { name: 'Item 6', category: 'option3', price: 'option6', color: 'option9', size: ['small', 'medium', 'large'] },
];

// Add event listener to search button
searchButton.addEventListener('click', () => {
  // Get search query from input
  const query = searchInput.value.toLowerCase().trim();
  
  // Filter items based on search query
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
  
  // Filter items based on category select
  const category = categorySelect.value;
  if (category) {
    filteredItems = filteredItems.filter(item => item.category === category);
  }
  
  // Filter items based on price select
  const price = priceSelect.value;
  if (price) {
    filteredItems = filteredItems.filter(item => item.price === price);
  }
  
  // Filter items based on color select
  const color = colorSelect.value;
  if (color) {
    filteredItems = filteredItems.filter(item => item.color === color);
  }
  
  // Filter items based on size checkboxes
  const selectedSizes = Array.from(sizeCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  if (selectedSizes.length > 0) {
    filteredItems = filteredItems.filter(item => item.size.some(size => selectedSizes.includes(size)));
  }
  
  // Display filtered items
  console.log(filteredItems);
});

