const parkingTransaction = {
    entryTime: null,
    exitTime: null,
    parkingDuration: null,
    parkingRate: null,
    totalCost: null,
    paymentMethod: null,
    paymentStatus: false,
  };
  
  function calculateParkingDuration(entryTime, exitTime) {
    const entryTimestamp = new Date(entryTime).getTime();
    const exitTimestamp = new Date(exitTime).getTime();
    const durationMilliseconds = exitTimestamp - entryTimestamp;
    const durationMinutes = durationMilliseconds / (1000 * 60);
    return durationMinutes;
  }
  
  function calculateParkingCost(duration, rate) {
    return duration * rate;
  }
  
  function makePayment(paymentMethod) {
    if (paymentMethod === 'creditCard') {
      parkingTransaction.paymentStatus = true;
      return 'Payment successful. Thank you!';
    } else if (paymentMethod === 'mobileWallet') {
      parkingTransaction.paymentStatus = true;
      return 'Payment successful. Thank you!';
    } else if (paymentMethod === 'cash') {
      parkingTransaction.paymentStatus = true;
      return 'Payment received. Thank you!';
    } else {
      return 'Invalid payment method.';
    }
  }
  
  parkingTransaction.entryTime = '08-21-2023 01:14 PM';
  parkingTransaction.exitTime = '08-21-2023 09:14 PM';
  parkingTransaction.parkingDuration = calculateParkingDuration(
    parkingTransaction.entryTime,
    parkingTransaction.exitTime
  );
  parkingTransaction.totalCost = calculateParkingCost(
    parkingTransaction.parkingDuration,
    parkingTransaction.parkingRate
  );
  parkingTransaction.paymentMethod = 'creditCard';
  
  const paymentMessage = makePayment(parkingTransaction.paymentMethod);
  
  console.log('Parking Transaction Details:');
  console.log('Entry Time:', parkingTransaction.entryTime);
  console.log('Exit Time:', parkingTransaction.exitTime);
  console.log('Duration (minutes):', parkingTransaction.parkingDuration);
  console.log('Total Cost (Rwf):', parkingTransaction.totalCost);
  console.log('Payment Method:', parkingTransaction.paymentMethod);
  console.log('Payment Status:', parkingTransaction.paymentStatus);
  console.log(paymentMessage);
  