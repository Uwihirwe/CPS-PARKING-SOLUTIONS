CREATE TABLE ParkingTransactions (
    TransactionID INT AUTO_INCREMENT PRIMARY KEY,
    EntryTime DATETIME NOT NULL,
    ExitTime DATETIME,
    ParkingDurationMinutes INT,
    ParkingRate DECIMAL(10, 2) NOT NULL,
    TotalCost DECIMAL(10, 2),
    PaymentMethod VARCHAR(50),
    PaymentStatus BOOLEAN DEFAULT FALSE
);

CREATE TABLE ParkingLocations (
    LocationID INT AUTO_INCREMENT PRIMARY KEY,
    LocationName VARCHAR(100) NOT NULL,
    Capacity INT NOT NULL,
    AvailableSpaces INT NOT NULL
);

CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL
);

CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    TransactionID INT,
    AmountPaid DECIMAL(10, 2) NOT NULL,
    PaymentTime DATETIME NOT NULL,
    FOREIGN KEY (TransactionID) REFERENCES ParkingTransactions(TransactionID)
);
