import apiClient from '../config/axiosConfig';

// Services API
export const getServices = () => apiClient.get('/services/');
export const getServiceById = (id) => apiClient.get(`/services/${id}/`);
export const createService = (data) => apiClient.post('/services/', data);
export const updateService = (id, data) => apiClient.put(`/services/${id}/`, data);
export const deleteService = (id) => apiClient.delete(`/services/${id}/`);

// Team Members API
export const getTeamMembers = () => apiClient.get('/team/');
export const getTeamMemberById = (id) => apiClient.get(`/team/${id}/`);
export const createTeamMember = (data) => apiClient.post('/team/', data);
export const updateTeamMember = (id, data) => apiClient.put(`/team/${id}/`, data);
export const deleteTeamMember = (id) => apiClient.delete(`/team/${id}/`);

// Testimonials API
export const getTestimonials = () => apiClient.get('/testimonials/');
export const getTestimonialById = (id) => apiClient.get(`/testimonials/${id}/`);
export const createTestimonial = (data) => apiClient.post('/testimonials/', data);
export const updateTestimonial = (id, data) => apiClient.put(`/testimonials/${id}/`, data);
export const deleteTestimonial = (id) => apiClient.delete(`/testimonials/${id}/`);

// Contact Inquiries API
export const getContactInquiries = () => apiClient.get('/contact/');
export const getContactInquiryById = (id) => apiClient.get(`/contact/${id}/`);
export const submitContactInquiry = (data) => apiClient.post('/contact/', data);
export const updateContactInquiry = (id, data) => apiClient.put(`/contact/${id}/`, data);
export const deleteContactInquiry = (id) => apiClient.delete(`/contact/${id}/`);

// API Routes
export const getAPIRoutes = () => apiClient.get('/routes/');

export default apiClient;
