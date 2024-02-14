<h1>Expenditure model consist of these attributes:</h1>
<p>name: string and required,</p>
<p>amount and required,</p>
<p>date and required,</p>
<p>description and required.</p>
<h1>Server has 6 routes:</h1>
<p>/api/v1/expenditures/ get - to get all expenditures;</p>
<p>/api/v1/expenditures/ post - to add new expenditure;</p>
<p>/api/v1/expenditures/:id patch - to update expenditure;</p>
<p>/api/v1/expenditures/:id delete - to update expenditure;</p>
<p>/api/v1/expenditures/:from/:to get - to get all expenditures between chosen date;</p>
<p>/api/v1/expenditures/sum/:from/:to get - to get sum of all expenditures between chosen date;</p>
