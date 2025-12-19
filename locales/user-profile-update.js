
function updateUserProfile(userData) {
  const requiredFields = ['id', 'name', 'email'];
  const missingFields = requiredFields.filter(field => !userData[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }

  if (!isValidEmail(userData.email)) {
    throw new Error('Invalid email format');
  }

  if (userData.name.length > 100) {
    throw new Error('Name exceeds maximum length of 100 characters');
  }

  const sanitizedData = {
    id: parseInt(userData.id),
    name: userData.name.trim(),
    email: userData.email.toLowerCase().trim(),
    age: userData.age ? parseInt(userData.age) : null,
    preferences: userData.preferences || {}
  };

  return {
    success: true,
    message: 'Profile updated successfully',
    data: sanitizedData,
    timestamp: new Date().toISOString()
  };
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleProfileUpdate(requestData) {
  try {
    const result = updateUserProfile(requestData);
    console.log('Update successful:', result);
    return result;
  } catch (error) {
    console.error('Update failed:', error.message);
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}