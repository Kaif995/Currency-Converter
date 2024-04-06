// Import the inquirer module
import inquirer from "inquirer";

// Define the main function
async function main() {

    // Define the currency object with their respective conversion rates
    const currency: any = {
        PKR: 0.0036,
        USD: 1,
        EUR: 1.08,
        GBP: 1.26,
        INR: 0.021
    };

    // Use inquirer to prompt the user for input
    let user_prompt = await inquirer.prompt(
        [
            {
                name: 'From',
                message: 'Which currency from do you want to convert?',
                type: 'list',
                choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
            },
            {
                name: 'To',
                message: 'To currency do you want to convert?',
                type: 'list',
                choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
            },
            {
                name: "amount",
                message: "Enter Amount do you want to convert?",
                type: 'number'
            }
        ]
    )

    // Get the conversion rates from the user input
    let from_amount = currency[user_prompt.From]
    let to_amount = currency[user_prompt.To]

    // Get the amount to convert from the user input
    let amount = user_prompt.amount;

    // Calculate the converted amount
    let Amount = amount / from_amount;
    let convertedAmount = Amount * to_amount;

    // Log the converted amount to the console
    console.log(convertedAmount)
}

// Call the main function
main();