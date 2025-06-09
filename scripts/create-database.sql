-- AutoHub Database Schema

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(100),
    avatar_url VARCHAR(500),
    role VARCHAR(20) DEFAULT 'user',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cars table
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    variant VARCHAR(100),
    year INTEGER NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    mileage INTEGER,
    condition VARCHAR(50),
    transmission VARCHAR(20),
    fuel_type VARCHAR(20),
    engine_capacity VARCHAR(20),
    color VARCHAR(50),
    city VARCHAR(100) NOT NULL,
    description TEXT,
    features TEXT[], -- Array of features
    images TEXT[], -- Array of image URLs
    status VARCHAR(20) DEFAULT 'pending', -- pending, active, sold, rejected
    views INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Car inquiries table
CREATE TABLE car_inquiries (
    id SERIAL PRIMARY KEY,
    car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
    inquirer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    message TEXT,
    phone VARCHAR(20),
    email VARCHAR(255),
    status VARCHAR(20) DEFAULT 'new', -- new, responded, closed
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Favorites table
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, car_id)
);

-- Chat messages table (for AI chatbot)
CREATE TABLE chat_messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    response TEXT,
    session_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    reviewed_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_cars_brand ON cars(brand);
CREATE INDEX idx_cars_city ON cars(city);
CREATE INDEX idx_cars_price ON cars(price);
CREATE INDEX idx_cars_year ON cars(year);
CREATE INDEX idx_cars_status ON cars(status);
CREATE INDEX idx_cars_user_id ON cars(user_id);
CREATE INDEX idx_favorites_user_id ON favorites(user_id);
CREATE INDEX idx_inquiries_car_id ON car_inquiries(car_id);
