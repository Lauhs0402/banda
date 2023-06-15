// scripts.js

// Function to handle the submission of a comment
function submitComment() {
    // Get the values entered by the user
    var authorInput = document.getElementById('author').value;
    var messageInput = document.getElementById('message').value;
  
    // Create a new comment element
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
  
    // Create inner elements for the comment
    var authorElement = document.createElement('span');
    authorElement.className = 'author';
    authorElement.textContent = authorInput;
  
    var messageElement = document.createElement('p');
    messageElement.className = 'message';
    messageElement.textContent = messageInput;
  
    var dateElement = document.createElement('span');
    dateElement.className = 'date';
    var currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleDateString();
  
    // Append inner elements to the comment element
    commentElement.appendChild(authorElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(messageElement);
  
    // Append the comment to the comment section
    var commentSection = document.getElementById('comment-section');
    commentSection.appendChild(commentElement);
  
    // Clear the form inputs
    document.getElementById('author').value = '';
    document.getElementById('message').value = '';
  
    // Create a new commit element
    var commitElement = document.createElement('div');
    commitElement.className = 'commit';
    commitElement.textContent = 'New commit by ' + authorInput + ' on ' + currentDate.toLocaleDateString();
  
    // Append the commit to the commit section
    var commitSection = document.getElementById('commit-section');
    commitSection.insertBefore(commitElement, commitSection.firstChild);
  }
  
  // Add event listener to the comment form submit button
  var submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', submitComment);
  

  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  });
  