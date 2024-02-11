Expenditure model consist of these attributes:
name: string and required,
amount and required,
date and required,
description and required.
Server has 6 routes:
/api/v1/expenditures/ get - to get all expenditures;
/api/v1/expenditures/ post - to add new expenditure;
/api/v1/expenditures/:id patch - to update expenditure;
/api/v1/expenditures/:id delete - to update expenditure;
/api/v1/expenditures/:from/:to get - to get all expenditures between chosen date;
/api/v1/expenditures/sum/:from/:to get - to get sum of all expenditures between chosen date;
