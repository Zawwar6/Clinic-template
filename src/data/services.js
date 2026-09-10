import { HeartPulse, Users, Flower2, Baby, ShieldCheck, Clock } from 'lucide-react';

export const services = [
  {
    slug: 'primary-care',
    icon: HeartPulse,
    name: 'Primary Care',
    description: 'Ongoing, whole-person care that keeps you healthy year after year.',
    longDescription:
      'Your primary care physician gets to know your health history and helps you stay ahead of problems, not just react to them. We coordinate every part of your care, from routine visits to specialist referrals.',
    benefits: [
      'A consistent physician who knows your history',
      'Coordinated referrals when you need a specialist',
      'Chronic condition management for diabetes, hypertension, and more',
      'Same-week appointments for non-urgent concerns',
    ],
  },
  {
    slug: 'family-medicine',
    icon: Users,
    name: 'Family Medicine',
    description: 'Care for every generation of your family, all in one place.',
    longDescription:
      'From your first pediatric visit to care for aging parents, our family medicine team treats patients of every age. We believe healthcare works best when it understands the whole family.',
    benefits: [
      'One clinic for parents, kids, and grandparents',
      'Shared scheduling for family appointments',
      'Immunizations and wellness visits for all ages',
      'A team that remembers your family\u2019s history',
    ],
  },
  {
    slug: 'womens-health',
    icon: Flower2,
    name: "Women's Health",
    description: 'Attentive, respectful care through every stage of life.',
    longDescription:
      'Our women\u2019s health team provides annual exams, prenatal care, family planning, and menopause support, with the time and attention every visit deserves.',
    benefits: [
      'Annual wellness exams and screenings',
      'Prenatal and postpartum care',
      'Family planning and contraceptive counseling',
      'Support through perimenopause and menopause',
    ],
  },
  {
    slug: 'pediatrics',
    icon: Baby,
    name: 'Pediatrics',
    description: 'Gentle, thorough care for infants, kids, and teens.',
    longDescription:
      'Our pediatric team is trained to make visits comfortable for kids and informative for parents, from newborn checkups through adolescence.',
    benefits: [
      'Well-child visits and growth tracking',
      'Full childhood immunization schedule',
      'Same-day sick visits for common illnesses',
      'A calm, kid-friendly office environment',
    ],
  },
  {
    slug: 'preventive-care',
    icon: ShieldCheck,
    name: 'Preventive Care',
    description: 'Catch small issues before they become bigger ones.',
    longDescription:
      'Regular screenings and checkups are the most effective way to protect your long-term health. We build a preventive plan tailored to your age, history, and risk factors.',
    benefits: [
      'Annual physicals and lab work',
      'Cancer and cardiovascular screenings',
      'Personalized risk assessments',
      'Vaccination and booster scheduling',
    ],
  },
  {
    slug: 'urgent-care',
    icon: Clock,
    name: 'Urgent Care',
    description: 'Fast, walk-in care when something can\u2019t wait.',
    longDescription:
      'For injuries and illnesses that need attention today, our urgent care team offers same-day appointments and short wait times, without a trip to the ER.',
    benefits: [
      'Same-day appointments, most days of the week',
      'Treatment for minor injuries and illnesses',
      'On-site basic lab and diagnostic testing',
      'Clear guidance on next steps and follow-up',
    ],
  },
];
