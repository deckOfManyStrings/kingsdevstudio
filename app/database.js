// /Users/bobby/Websites/freelance/lib/database.js
import { supabase } from './supabase';

// Function to save contact form submissions
export async function saveContactSubmission(formData) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return { success: false, error: error.message };
  }
}

// Function to get portfolio projects from Supabase
export async function getPortfolioProjects(category = null) {
  try {
    let query = supabase
      .from('portfolio')
      .select('*');
    
    // If category is specified, filter by it
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query;

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    return { success: false, error: error.message };
  }
}

// Function to get testimonials from Supabase
export async function getTestimonials() {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*');

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return { success: false, error: error.message };
  }
}