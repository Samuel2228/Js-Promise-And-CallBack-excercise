// No 1

function multiplyByTwo(number, callback) {
  var result = number * 2;
  callback(result);
}
function printResult(result) {
  console.log("The result is: " + result);
}
// Example usage
var number = 5;
multiplyByTwo(number, printResult);


// No 2

function filterEvenNumbers(array, callback) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example usage
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var evenNumbers = filterEvenNumbers(numbers, isEven);
  console.log(evenNumbers);
  

//   No 3

function calculateSum(num1, num2, callback) {
    var sum = callback(num1, num2);
    console.log("The sum is: " + sum);
  }
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  // Example usage
  var number1 = 5;
  var number2 = 10;
  calculateSum(number1, number2, addNumbers);
  

//   No 4

function convertToUpperCase(array, callback) {
    var updatedArray = [];
    for (var i = 0; i < array.length; i++) {
      var convertedString = callback(array[i]);
      updatedArray.push(convertedString);
    }
    return updatedArray;
  }
  function toUpperCase(string) {
    return string.toUpperCase();
  }
  // Example usage
  var strings = ["hello", "world", "! LOVE !"];
  var uppercasedStrings = convertToUpperCase(strings, toUpperCase);
  console.log(uppercasedStrings);

//   No 5

function doMathOperation(num1, num2, callback) {
    var result = callback(num1, num2);
    console.log("The result is: " + result);
  }
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  function subtractNumbers(num1, num2) {
    return num1 - num2;
  }
  function multiplyNumbers(num1, num2) {
    return num1 * num2;
  }
  
  // Example usage
  var number1 = 5;
  var number2 = 10;
  
  doMathOperation(number1, number2, addNumbers);      
  doMathOperation(number1, number2, subtractNumbers); 
  doMathOperation(number1, number2, multiplyNumbers);  
  

//   Promise

//   No 6
function fetchData() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 5000) + 1000; 
      setTimeout(() => {
        const randomNumber = Math.random(); 
        resolve(randomNumber); 
      }, delay);
    });
  }
  // Example usage
  fetchData()
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  

    // No 7 
    function fetchMultipleData(links) {
        var promises = [];
        for (var i = 0; i < links.length; i++) {
          var promise = fetch(links
            [i]).then((response) => response.json());
          promises.push(promise);
        }
        return Promise.all(promises);
      }
      // Example usage
      var links = [
        "https://api.example.com/data1",
        "https://api.example.com/data2",
    "https://api.example.com/data3",
    ];
    fetchMultipleData(links)
    .then((data) => {
        console.log("Fetched data:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


    // No 8
    function checkNumber(number) {
      return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
          resolve(`${number} is even.`);
        } else {
          reject(new Error(`${number} is odd.`));
        }
      });
    }
    

    // No 9
    function uploadFile(file) {
      return new Promise((resolve, reject) => {
        // Simulate random delay between 1 and 10 seconds
        const randomDelay = Math.floor(Math.random() * 10000) + 1000;
        setTimeout(() => {
          resolve(`File "${file.name}" uploaded successfully.`);
        }, randomDelay);
      });
    }
    
      
  // No 10
  function waitForUserInput() {
    return new Promise((resolve) => {
      const button = document.getElementById('myButton'); // Replace 'myButton' with the ID of your button element
      const clickHandler = () => {
        button.removeEventListener('click', clickHandler); // Remove the event listener to prevent multiple resolutions
        resolve();
      };
      button.addEventListener('click', clickHandler);
    });
  }
  
  waitForUserInput()
  .then(() => {
    console.log('Button clicked!'); // This message will be displayed when the user clicks the button.
  });


  // Then

  // No 11 
  function getData() {
    return new Promise((resolve) => {
      const randomNumber = Math.random(); // Generating a random number between 0 and 1
      // Simulate random delay between 1 and 5 seconds
      const randomDelay = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => {
        resolve(randomNumber);
      }, randomDelay);
    });
  }
  // Calling the getData function and using .then to handle the resolved value and print it
  getData()
    .then((result) => {
      console.log('Resolved number:', result);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
  


    // No 12
    function multiplyByTwo(number) {
      return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
          resolve(number * 2);
        } else {
          reject(new Error('Input is not a number'));
        }
      });
    }
    // Calling multiplyByTwo and using .then to handle the resolved value
    multiplyByTwo(5)
      .then(result => {
        console.log('Result:', result);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });



      // No 13
      function sumNumbers(numbersArray) {
        return new Promise((resolve, reject) => {
          if (!Array.isArray(numbersArray)) {
            reject(new Error('Input is not an array'));
            return;
          }
          const isAllNumbers = numbersArray.every(num => typeof num === 'number');
          if (!isAllNumbers) {
            reject(new Error('Array contains non-numeric elements'));
            return;
          }
          const sum = numbersArray.reduce((acc, num) => acc + num, 0);
          resolve(sum);
        });
      }
      // Example array of numbers
      const nmbers = [1, 2, 3, 4, 5];
      // Calling sumNumbers and using .then to handle the resolved value
      sumNumbers(nmbers)
        .then(sum => {
          console.log('Sum:', sum);
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
      

        // No 14
        function fetchData() {
          const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah'];
          return new Promise((resolve, reject) => {
            const randomDelay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1 and 3 seconds (in milliseconds)
            const randomIndex = Math.floor(Math.random() * names.length);
            const randomName = names[randomIndex];
            setTimeout(() => {
              resolve(randomName);
            }, randomDelay);
          });
        }
        // Calling fetchData and using .then to handle the resolved value
        fetchData()
          .then(randomName => {
            console.log('Random Name:', randomName);
          })
          .catch(error => {
            console.error("Error:");
          });
        
          
          // No 15
          function getUserData() {
            // Simulated user data (replace this with your actual user data retrieval logic)
            const user = {
              id: 123,
              name: 'John Doe',
              email: 'john.doe@example.com',
              age: 30,
              address: '123 Main Street',
            };
            return new Promise((resolve, reject) => {
              const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 and 5 seconds (in milliseconds)
              setTimeout(() => {
                resolve(user);
              }, randomDelay);
            });
          }
          // Calling getUserData and using .then to handle the resolved value
          getUserData()
            .then(userData => {
              console.log('User Data:', userData);
            })
            .catch(error => {
              console.error('Error:', error.message);
            });

            // async/await:

            // NO 16
            async function fetchData() {
              const apiUrl = 'https://api.example.com/data'; // Replace this with the actual API endpoint URL
              try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                  throw new Error('Failed to fetch data from the API');
                }
                const data = await response.json();
                return data;
              } catch (error) {
                throw new Error('An error occurred while fetching data: ' + error.message);
              }
            }
            // Calling fetchData and using await to handle the returned data
            async function printData() {
              try {
                const data = await fetchData();
                console.log('Fetched Data:', data);
              } catch (error) {
                console.error('Error:', error.message);
              }
            }
            // Call the printData function to initiate the fetching process
            printData();
            

            // No 17
            async function fetchMultipleData(urls) {
              try {
                const responses = await Promise.all(urls.map(url => fetch(urls)));
                const dataArray = await Promise.all(responses.map(response => {
                  if (!response.ok) {
                    throw new Error('Failed to fetch data from the API');
                  }
                  return response.json();
                }));
                return dataArray;
              } catch (error) {
                throw new Error(`An error occurred while fetching data: ${error.message}`);
              }
            }     
            // Example array of URLs
            const urls = [
              'https://api.example.com/data/1',
              'https://api.example.com/data/2',
              'https://api.example.com/data/3',
            ];
            // Calling fetchMultipleData and using await to handle the returned data
            async function printData() {
              try {
                const data = await fetchMultipleData(urls);
                console.log('Fetched Data:', data);
              } catch (error) {
                console.error("Error:".message);
              }
            } 
            // Call the printData function to initiate the fetching process
            printData();
            

          // No 18
          async function calculateSum(num1, num2) {
            return new Promise((resolve) => {
              setTimeout(() => {
                const sum = num1 + num2;
                resolve(sum);
              }, 2000); // Delay of 2 seconds (2000 milliseconds)
            });
          }    
          // Calling calculateSum and using await to get the sum and print it
          async function printSum() {
            try {
              const sum = await calculateSum(5, 10);
              console.log('Sum:', sum);
            } catch (error) {
              console.error('Error:', error.message);
            }
          }
          // Call the printSum function to initiate the calculation and printing process
          printSum();
          

          // No 19
          async function getUserData() {
            return new Promise((resolve) => {
              // Simulated user data (replace this with your actual user data retrieval logic)
              const user = {
                id: 123,
                name: 'John Doe',
                email: 'john.doe@example.com',
                age: 30,
                address: '123 Main Street',
              };
              // Simulating a delay of 2 seconds to mimic fetching data from the server
              setTimeout(() => {
                resolve(user);
              }, 2000);
            });
          }
          // Calling getUserData and using await to handle the returned user data
          async function printUserData() {
            try {
              const userData = await getUserData();
              console.log('User Data:', userData);
            } catch (error) {
              console.error('Error:', error.message);
            }
          }
          // Call the printUserData function to initiate the data fetching and printing process
          printUserData();
          

          // No 20
          async function uploadFiles(fileObjects) {
            try {
              for (const fileObj of fileObjects) {
                const formData = new FormData();
                formData.append('file', fileObj.file);
                const response = await fetch('https://api.example.com/upload', {
                  method: 'POST',
                  body: formData,
                });
                if (!response.ok) {
                  throw new Error('Failed to upload file ' + fileObj.name);
                }
                console.log("Uploaded file:", fileObj.name);
              }
            } catch (error) {
              throw new Error('An error occurred while uploading files: ' + error.message);
            }
          }  
          // Example array of file objects
          const files = [
            "Enugu files", "Ebonyi Files", "AkwaIibom Files"
          ]
          // Call the uploadFiles function to initiate the file upload process
          uploadFiles(files)
            .then(() => {
              console.log('All files uploaded successfully.');
            })
            .catch(error => {
              console.error('Error:', error.message);
            });
          


            // setTimeout:

            // No 22
            function printMessage(message) {
              setTimeout(() => {
                console.log(message);
              }, 2000);
            }
            // Call the printMessage function with the message you want to print
            printMessage('Hello, this message will be printed after 2 seconds.');
            

            // No 23
            function printMessages(messages) {
              let index = 0;
              function printMessageWithDelay() {
                if (index < messages.length) {
                  console.log(messages[index]);
                  index++;
                  setTimeout(printMessageWithDelay, 1000);
                }
              }
              printMessageWithDelay();
            }  
            // Example array of messages
            const messagesArray = [
              'Message 1',
              'Message 2',
              'Message 3',
              'Message 4',
              'Message 5',
            ];
            // Call the printMessages function with the array of messages
            printMessages(messagesArray);


            // No 24
            function countdown(number) {
              function printNumberWithDelay(num) {
                if (num >= 0) {
                  console.log(num);
                  if (num > 0) {
                    setTimeout(() => {
                      printNumberWithDelay(num - 1);
                    }, 1000);
                  } else {
                    console.log("Countdown complete!");
                  }
                }
              }
              printNumberWithDelay(number);
            }
            // Call the countdown function with the desired number
            countdown(5);
            

            // No 25
            function changeBackgroundColor(newColor) {
              setTimeout(() => {
                document.body.style.backgroundColor = newColor;
              }, 3000); // Delay of 3 seconds (3000 milliseconds)
            }
            // Call the changeBackgroundColor function with the desired new color
            changeBackgroundColor('lightblue');
            

            // No 26
            function changeBackgroundColorSequentially(colors) {
              let index = 0;
              function changeColorWithDelay() {
                if (index < colors.length) {
                  index.body.style.backgroundColor = colors[index];
                  index++;
                  setTimeout(changeColorWithDelay, 2000);
                }
              }
              changeColorWithDelay();
            }
            
            