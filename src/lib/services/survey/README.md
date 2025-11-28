# Universal Survey/Feedback Service

A flexible and reusable survey system that supports various question types and can be easily configured for different survey scenarios.

## Features

- ✅ Multiple field types (text, textarea, rating, radio, checkbox, select, email, phone, date, scale)
- ✅ Field validation (required, min/max length, custom validators)
- ✅ Conditional fields (show/hide based on other answers)
- ✅ Progress tracking
- ✅ Form submission with local storage (easily adaptable to API)
- ✅ Beautiful UI with animations
- ✅ Thank you page after submission
- ✅ TypeScript support

## Quick Start

### 1. Create a New Survey Configuration

Create a new file in `src/lib/services/survey/configs/yourSurveyName.ts`:

\`\`\`typescript
import { SurveyConfig } from '../types';

export const yourSurveyConfig: SurveyConfig = {
  id: 'your-survey-id',
  title: 'Your Survey Title',
  description: 'Survey description',
  submitButtonText: 'Submit',
  showProgressBar: true,
  allowMultipleSubmissions: false,
  redirectAfterSubmit: '/feedback/thank-you',
  sections: [
    {
      id: 'section-1',
      title: 'Section Title',
      description: 'Section description',
      fields: [
        {
          id: 'question_1',
          type: 'textarea',
          label: 'Question 1?',
          placeholder: 'Your answer...',
          validation: {
            required: true,
            minLength: 10,
            maxLength: 500,
          },
        },
        // Add more fields...
      ],
    },
  ],
};
\`\`\`

### 2. Register Your Survey

Add your survey to `src/lib/services/survey/configs/index.ts`:

\`\`\`typescript
import { yourSurveyConfig } from './yourSurveyName';

export const surveyConfigs: Record<string, SurveyConfig> = {
  'training-feedback': trainingFeedbackConfig,
  'your-survey-id': yourSurveyConfig, // Add this line
};
\`\`\`

### 3. Create a Page for Your Survey

Create `src/app/feedback/your-survey/page.tsx`:

\`\`\`typescript
'use client';

import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { SurveyForm } from '@/components/survey/SurveyForm';
import { yourSurveyConfig } from '@/lib/services/survey/configs/yourSurveyName';
import { motion } from 'framer-motion';
import { ChatText } from 'phosphor-react';

export default function YourSurveyPage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      <section className="py-16 bg-gradient-to-br from-energy-950 via-energy-900 to-oil-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-energy-600/20 rounded-full mb-6"
              >
                <ChatText className="w-10 h-10 text-energy-400" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {yourSurveyConfig.title}
              </h1>
              <p className="text-xl text-energy-100/90">
                {yourSurveyConfig.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <SurveyForm config={yourSurveyConfig} />
        </div>
      </section>
    </div>
  );
}
\`\`\`

## Field Types

### Text Input
\`\`\`typescript
{
  id: 'email',
  type: 'email',
  label: 'Email Address',
  validation: { required: true }
}
\`\`\`

### Textarea
\`\`\`typescript
{
  id: 'comments',
  type: 'textarea',
  label: 'Comments',
  placeholder: 'Share your thoughts...',
  validation: { minLength: 10, maxLength: 500 }
}
\`\`\`

### Rating/Scale
\`\`\`typescript
{
  id: 'satisfaction',
  type: 'scale',
  label: 'How satisfied are you?',
  scale: { min: 1, max: 10, minLabel: 'Not at all', maxLabel: 'Very satisfied' },
  validation: { required: true }
}
\`\`\`

### Radio (Single Choice)
\`\`\`typescript
{
  id: 'preference',
  type: 'radio',
  label: 'Choose one option',
  options: [
    { value: 'option1', label: 'Option 1', description: 'Description...' },
    { value: 'option2', label: 'Option 2' }
  ],
  validation: { required: true }
}
\`\`\`

### Checkbox (Multiple Choice)
\`\`\`typescript
{
  id: 'features',
  type: 'checkbox',
  label: 'Select all that apply',
  options: [
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' }
  ]
}
\`\`\`

### Select Dropdown
\`\`\`typescript
{
  id: 'category',
  type: 'select',
  label: 'Select a category',
  options: [
    { value: 'cat1', label: 'Category 1' },
    { value: 'cat2', label: 'Category 2' }
  ],
  validation: { required: true }
}
\`\`\`

## Conditional Fields

Show/hide fields based on other answers:

\`\`\`typescript
{
  id: 'followup',
  type: 'textarea',
  label: 'Please provide more details',
  conditional: {
    fieldId: 'satisfaction',
    operator: 'lessThan',
    value: 5
  }
}
\`\`\`

Operators: `equals`, `notEquals`, `contains`, `greaterThan`, `lessThan`

## Custom Validation

\`\`\`typescript
{
  id: 'custom',
  type: 'text',
  label: 'Custom Field',
  validation: {
    customValidator: (value) => {
      if (value && value.length < 5) {
        return 'Must be at least 5 characters';
      }
      return null; // No error
    }
  }
}
\`\`\`

## API Integration

To integrate with your backend API, modify the `onSubmit` callback in your survey config:

\`\`\`typescript
export const yourSurveyConfig: SurveyConfig = {
  // ... other config
  onSubmit: async (response: SurveyResponse) => {
    const apiResponse = await fetch('/api/surveys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response),
    });
    
    if (!apiResponse.ok) {
      throw new Error('Failed to submit survey');
    }
  },
};
\`\`\`

## Existing Surveys

- **Training Feedback** (`/feedback/training`) - Training session feedback form

## File Structure

\`\`\`
src/lib/services/survey/
├── types.ts                    # TypeScript types and interfaces
├── validation.ts               # Field validation logic
├── storage.ts                  # Survey storage service
├── index.ts                    # Main export file
├── README.md                   # This file
└── configs/
    ├── index.ts                # Survey registry
    └── trainingFeedback.ts     # Training feedback config

src/components/survey/
├── SurveyField.tsx            # Individual field renderer
└── SurveyForm.tsx             # Main form component

src/app/feedback/
├── training/
│   └── page.tsx               # Training feedback page
└── thank-you/
    └── page.tsx               # Thank you page
\`\`\`

## Benefits

1. **Reusable**: Create new surveys by just adding a configuration file
2. **Type-safe**: Full TypeScript support
3. **Flexible**: Supports many field types and validation rules
4. **Beautiful**: Modern UI with animations
5. **Easy to extend**: Add new field types or validation rules easily
6. **No code duplication**: One form component handles all surveys

## Future Enhancements

- [ ] File upload field type
- [ ] Multi-step forms with navigation
- [ ] Form branching/logic jumps
- [ ] Email notifications on submission
- [ ] Admin dashboard to view responses
- [ ] Export responses to CSV/Excel
- [ ] Analytics and reporting

