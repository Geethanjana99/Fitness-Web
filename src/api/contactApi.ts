export interface ContactData {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export const submitContactForm = async (data: Omit<ContactData, 'createdAt'>): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    const existingMessagesStr = localStorage.getItem('contactMessages');
    const existingMessages: ContactData[] = existingMessagesStr ? JSON.parse(existingMessagesStr) : [];
    
    const newMessage: ContactData = {
      ...data,
      createdAt: new Date().toISOString()
    };
    
    existingMessages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
    
    return { success: true, message: 'Message sent successfully.' };
  } catch (error) {
    console.error('Error saving to local storage', error);
    throw new Error('Failed to submit form. Please try again.');
  }
};
