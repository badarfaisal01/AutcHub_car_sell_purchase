-- Seed data for AutoHub

-- Insert sample users
INSERT INTO users (name, email, password_hash, phone, city, role) VALUES
('Ahmed Khan', 'ahmed@example.com', '$2b$10$hashedpassword1', '+92 300 1234567', 'Karachi', 'user'),
('Sara Ali', 'sara@example.com', '$2b$10$hashedpassword2', '+92 301 2345678', 'Lahore', 'user'),
('Muhammad Hassan', 'hassan@example.com', '$2b$10$hashedpassword3', '+92 302 3456789', 'Islamabad', 'user'),
('Admin User', 'admin@autohub.pk', '$2b$10$hashedpassword4', '+92 300 0000000', 'Karachi', 'admin');

-- Insert sample cars
INSERT INTO cars (user_id, title, brand, model, variant, year, price, mileage, condition, transmission, fuel_type, engine_capacity, color, city, description, features, images, status, views) VALUES
(1, '2020 Toyota Corolla GLi', 'Toyota', 'Corolla', 'GLi', 2020, 3200000, 45000, 'Excellent', 'Manual', 'Petrol', '1300cc', 'White', 'Karachi', 'Well maintained Toyota Corolla GLi in excellent condition. Single owner, all documents clear.', 
 ARRAY['Air Conditioning', 'Power Steering', 'Power Windows', 'Central Locking'], 
 ARRAY['/images/corolla1.jpg', '/images/corolla2.jpg'], 'active', 245),

(2, '2019 Honda Civic Turbo', 'Honda', 'Civic', 'Turbo', 2019, 4500000, 35000, 'Excellent', 'Automatic', 'Petrol', '1500cc', 'Black', 'Lahore', 'Honda Civic Turbo in pristine condition. Fully loaded with all features.',
 ARRAY['Turbo Engine', 'Automatic Transmission', 'Sunroof', 'Leather Seats', 'Navigation System'],
 ARRAY['/images/civic1.jpg', '/images/civic2.jpg'], 'active', 189),

(3, '2021 Suzuki Alto VXR', 'Suzuki', 'Alto', 'VXR', 2021, 1800000, 25000, 'Good', 'Manual', 'Petrol', '800cc', 'Red', 'Islamabad', 'Suzuki Alto VXR in good condition. Perfect for city driving.',
 ARRAY['Air Conditioning', 'Power Steering', 'Central Locking'],
 ARRAY['/images/alto1.jpg'], 'active', 156),

(1, '2018 Hyundai Tucson GLS', 'Hyundai', 'Tucson', 'GLS', 2018, 6200000, 55000, 'Good', 'Automatic', 'Petrol', '2000cc', 'Silver', 'Rawalpindi', 'Hyundai Tucson GLS SUV in good condition. Spacious and comfortable.',
 ARRAY['4WD', 'Automatic Transmission', 'Leather Seats', 'Sunroof', 'Reverse Camera'],
 ARRAY['/images/tucson1.jpg', '/images/tucson2.jpg'], 'active', 98),

(2, '2022 KIA Picanto', 'KIA', 'Picanto', 'Base', 2022, 2100000, 15000, 'Excellent', 'Manual', 'Petrol', '1000cc', 'Blue', 'Karachi', 'Almost new KIA Picanto with low mileage. Under warranty.',
 ARRAY['Air Conditioning', 'Power Steering', 'ABS', 'Airbags'],
 ARRAY['/images/picanto1.jpg'], 'pending', 67);

-- Insert sample inquiries
INSERT INTO car_inquiries (car_id, inquirer_id, message, phone, email) VALUES
(1, 2, 'Is the car still available? Can I schedule a test drive?', '+92 301 2345678', 'sara@example.com'),
(1, 3, 'What is the final price? Any room for negotiation?', '+92 302 3456789', 'hassan@example.com'),
(2, 1, 'Has the car been in any accidents?', '+92 300 1234567', 'ahmed@example.com');

-- Insert sample favorites
INSERT INTO favorites (user_id, car_id) VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 2);

-- Insert sample chat messages
INSERT INTO chat_messages (user_id, message, response, session_id) VALUES
(1, 'What should I look for when buying a used car?', 'When buying a used car, check the engine condition, body for rust or damage, tire condition, service history, and ensure all documents are clear. Also verify the VIN number and get a mechanical inspection.', 'session_1'),
(2, 'What is the average price of Honda Civic 2019?', 'The average price for a 2019 Honda Civic in Pakistan ranges from 40-50 lacs depending on the variant, condition, and mileage. Turbo variants are typically priced higher.', 'session_2');

-- Insert sample reviews
INSERT INTO reviews (reviewer_id, reviewed_user_id, car_id, rating, comment) VALUES
(2, 1, 1, 5, 'Great seller! Car was exactly as described and the transaction was smooth.'),
(3, 2, 2, 4, 'Good experience overall. Car was in good condition but could have been cleaner.');
