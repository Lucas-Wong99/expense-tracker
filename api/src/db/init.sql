-- DROP TABLE IF EXISTS expenses CASCADING;

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NUll,
  cost INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL,
  date_created TIMESTAMP DEFAULT NOW()
);

INSERT INTO expenses (name, cost, category) VALUES ('Keg Dinner', 200, 'Food/Dining');