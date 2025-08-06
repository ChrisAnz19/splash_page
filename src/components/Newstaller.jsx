import { useState, useEffect } from "react";
import TextAnimation from "./animations/TextAnimation";
import Button from "./common/button";
import { supabase } from "../utils/supabase";

const Newstaller = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouType, setThankYouType] = useState('');

  // Test Supabase connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
        console.log('Supabase Key exists:', !!process.env.REACT_APP_SUPABASE_ANON_KEY);
        
        const { error } = await supabase.from('early_access_requests').select('count').limit(1);
        if (error) {
          console.error('Supabase connection test failed:', error);
        } else {
          console.log('Supabase connection successful');
        }
      } catch (error) {
        console.error('Supabase connection error:', error);
      }
    };
    
    testConnection();
  }, []);

  const inputClass =
    "border-t border-[#9CA3AF] border-t-[1px] leading-[72px] text-xl font-semibold py-auto placeholder:text-white placeholder:font-semibold outline-none focus:border-t-[#9CA3AF] focus:outline-none w-full bg-transparent";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous error messages when user starts typing
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus('Please enter your name');
      return false;
    }
    if (!formData.company.trim()) {
      setSubmitStatus('Please enter your company');
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitStatus('Please enter your email');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setSubmitStatus('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (type) => {
    console.log('Form submission started:', type);
    console.log('Form data:', formData);
    
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      console.log('Attempting to insert into Supabase...');
      const tableName = type === 'early-access' ? 'early_access_requests' : 'investor_requests';
      console.log('Table name:', tableName);
      
      const { data, error } = await supabase
        .from(tableName)
        .insert([
          {
            name: formData.name.trim(),
            company: formData.company.trim(),
            email: formData.email.trim().toLowerCase(),
            submitted_at: new Date().toISOString()
          }
        ]);

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error details:', error);
        throw error;
      }

      console.log('Success! Showing thank you message');
      // Show thank you message
      setThankYouType(type);
      setShowThankYou(true);
      
      // Dispatch custom event to hide floating button
      window.dispatchEvent(new CustomEvent('formSubmitted'));
      
      // Reset form
      setFormData({ name: '', company: '', email: '' });

    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setSubmitStatus(`Error: ${error.message || 'Failed to submit request. Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    setThankYouType('');
  };

  // Thank you messages
  const thankYouMessages = {
    'early-access': {
      title: 'Thank you for your interest!',
      message: 'We\'ll be in touch soon about early access to Knowledge. Keep an eye on your inbox for updates.'
    },
    'intro': {
      title: 'Investor intro request received!',
      message: 'We\'ve received your request for an investor introduction. Our team will review and get back to you shortly.'
    }
  };

  if (showThankYou) {
    console.log('Showing thank you screen for type:', thankYouType);
    console.log('Thank you message:', thankYouMessages[thankYouType]);
    
    return (
      <section
        className="rounded-b-[90px] mt-[90px] md:mt-[280px] pb-20 md:pb-[122px] pt-[45px] sm:pt-[110px] relative z-[10]"
        style={{
          background: `url(/newsletter-bg.png) #000 no-repeat bottom left`,
        }}
      >
        <img
          src="/oval.png"
          alt="newsletter"
          width={1602}
          height={1602}
          className="absolute top-[-55px] sm:top-[-105px] md:top-[-21%] left-0 w-full"
        />
        <div id="waitlist" className="mx-auto container relative z-10">
          <div className="text-center max-w-[600px] mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {thankYouMessages[thankYouType]?.title || 'Thank you!'}
            </h3>
            <p className="text-lg text-[#818181] mb-8">
              {thankYouMessages[thankYouType]?.message || 'Your request has been submitted.'}
            </p>
            <Button 
              text="OK" 
              className="mx-auto"
              onClick={() => {
                console.log('OK button clicked');
                closeThankYou();
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="rounded-b-[90px] mt-[90px] md:mt-[280px] pb-20 md:pb-[122px] pt-[45px] sm:pt-[110px] relative z-[10]"
      style={{
        background: `url(/newsletter-bg.png) #000 no-repeat bottom left`,
      }}
    >
      <img
        src="/oval.png"
        alt="newsletter"
        width={1602}
        height={1602}
        className="absolute top-[-55px] sm:top-[-105px] md:top-[-21%] left-0 w-full"
      />
      <div id="waitlist" className="mx-auto container relative z-10">
        <h3 className="text-5xl leading-[60px] md:text-[60px] md:leading-[1.4] lg:text-[90px] lg:leading-[110px] font-bold max-w-[524px] mx-auto text-center mb-16">
          <TextAnimation text="Know who they are. Predict what they'll do next." />
        </h3>
        <p className="text-center text-base font-medium mb-6">
          We're partnering with a small number of venture funds and beta testers who align with our vision. If you'd like to be considered, share your info below.
        </p>
        <div className="flex flex-col gap-5 mx-auto max-w-[818px]">
          <div className="relative">
            <input 
              className={inputClass} 
              type="text" 
              placeholder="Name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷1
            </span>
          </div>
          <div className="relative">
            <input 
              className={inputClass} 
              type="text" 
              placeholder="Company" 
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷2
            </span>
          </div>
          <div className="relative">
            <input 
              className={inputClass} 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="absolute top-3 lg:text-lg end-0 text-[#818181] font-mono" style={{ fontFamily: 'Courier New, monospace' }}>
              0̷3
            </span>
          </div>

          {submitStatus && (
            <div className="text-center text-sm text-red-400">
              {submitStatus}
            </div>
          )}

          <div className="flex flex-wrap justify-end gap-6">
            <Button 
              text={isSubmitting ? "SUBMITTING..." : "REQUEST EARLY ACCESS"} 
              className="max-sm:flex-grow"
              onClick={() => {
                console.log('Early access button clicked!');
                handleSubmit('early-access');
              }}
              disabled={isSubmitting}
            />
            <Button 
              text={isSubmitting ? "SUBMITTING..." : "LET'S TALK"} 
              className="max-sm:flex-grow"
              onClick={() => {
                console.log('Intro button clicked!');
                handleSubmit('intro');
              }}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newstaller;
