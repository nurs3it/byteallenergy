/**
 * Training Feedback Survey Configuration
 */

import { SurveyConfig } from '../types';

export const trainingFeedbackConfig: SurveyConfig = {
  id: 'training-feedback',
  title: 'Training Feedback Form',
  description: 'Please fill out the form below to help us improve our future training sessions.',
  submitButtonText: 'Submit Feedback',
  showProgressBar: false,
  allowMultipleSubmissions: false,
  redirectAfterSubmit: '/feedback/thank-you',
  sections: [
    {
      id: 'main',
      fields: [
        {
          id: 'name',
          type: 'text',
          label: 'Name',
          placeholder: 'Enter your full name',
          validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
          },
        },
        {
          id: 'position',
          type: 'text',
          label: 'Position',
          placeholder: 'Enter your job position',
          validation: {
            required: true,
            minLength: 2,
            maxLength: 100,
          },
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email',
          placeholder: 'Enter your email address',
          validation: {
            required: true,
          },
        },
        {
          id: 'overall_rating',
          type: 'textarea',
          label: '1. How would you rate the training overall?',
          placeholder: 'Please share your overall impression of the training...',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
        },
        {
          id: 'material_clarity',
          type: 'textarea',
          label: '2. How clear and easy to understand was the material?',
          placeholder: 'Tell us about the clarity and comprehensibility of the training materials...',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
        },
        {
          id: 'trainer_performance',
          type: 'textarea',
          label: '3. How would you rate the trainer\'s performance?',
          description: '(delivery, communication, engagement)',
          placeholder: 'Share your thoughts on the trainer\'s delivery, communication style, and ability to engage...',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
        },
        {
          id: 'liked_most',
          type: 'textarea',
          label: '4. What did you like most about the training?',
          placeholder: 'What aspects of the training did you find most valuable or enjoyable?',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
        },
        {
          id: 'improvements',
          type: 'textarea',
          label: '5. What could be improved?',
          placeholder: 'Please suggest specific areas where we can improve...',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
        },
        {
          id: 'additional_comments',
          type: 'textarea',
          label: '6. Any additional comments or suggestions:',
          placeholder: 'Feel free to share any other thoughts, suggestions, or feedback...',
          validation: {
            required: false,
            maxLength: 1000,
          },
        },
      ],
    },
  ],
};

