const { loanOut} = require("./loan");
loanOut(650)
.then((resolve) => {
    console.log(`\t-> I got $${resolve.amount} loan from the bank! Remaining Credit Limit: $${resolve.creditLimit}`);
})
.catch((err) => {
  console.log(`\t-> Error: ${err}!`);
});