SELECT * FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_text
WHERE description LIKE '%saga%';

TRUNCATE film_actor;
TRUNCATE film_category;

SELECT * FROM film_actor;
SELECT * FROM film_category;

-- address, city, customer, film, film_actor,  film_category, inventory, payment, rental, staff, store