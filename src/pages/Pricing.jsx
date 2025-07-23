import { useState } from "react";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const toggleBilling = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  const plans = [
    {
      title: "FREE",
      price: 0,
      users: "Up to 5 users",
      features: ["3 Projects", "5GB Storage", "Basic Support"],
      cta: "Get Started"
    },
    {
      title: "PREMIUM",
      price: billing === "monthly" ? 350 : 300,
      users: "All features",
      features: [
        "Unlimited projects",
        "Task Management",
        "Time Tracking",
        "Blueprints",
        "Zia Insights",
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      title: "ENTERPRISE",
      price: billing === "monthly" ? 700 : 600,
      users: "Advanced features",
      features: [
        "AI Search",
        "Custom Roles",
        "Status Dashboard",
        "2FA",
        "Single Sign-On",
      ],
      cta: "Contact Sales"
    },
  ];

  const featureComparison = [
    { feature: "Projects", free: "3", premium: "Unlimited", enterprise: "Unlimited" },
    { feature: "Storage", free: "5GB", premium: "10GB", enterprise: "50GB" },
    { feature: "Users", free: "Up to 5", premium: "Unlimited", enterprise: "Unlimited" },
    { feature: "Priority Support", free: "✖", premium: "✔", enterprise: "✔" },
    { feature: "API Access", free: "✖", premium: "✔", enterprise: "✔" },
    { feature: "Mobile App", free: "✔", premium: "✔", enterprise: "✔" },
    { feature: "Time Tracking", free: "✖", premium: "✔", enterprise: "✔" },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, all paid plans come with a 10-day free trial with no credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            10-day free trial. No credit card required.
          </h1>
          <p className="text-xl text-gray-700">
            Choose the perfect plan for your team's needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className={billing === "monthly" ? "text-xl font-semibold" : "text-gray-500"}>
            Monthly
          </span>
          <button
            onClick={toggleBilling}
            className="relative inline-flex items-center h-6 w-11 rounded-full bg-gray-400"
          >
            <span
              className={`inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ${
                billing === "monthly" ? "translate-x-1" : "translate-x-5"
              }`}
            />
          </button>
          <span className={billing === "yearly" ? "text-xl font-semibold" : "text-gray-500"}>
            Yearly <span className="text-sm text-green-600">(Save 15%)</span>
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md border-2 ${
                plan.popular ? "border-[#DB4C3F]" : "border-transparent"
              } transition-all hover:shadow-lg`}
            >
            
              <h3 className="text-center text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-center text-gray-500 mb-4">{plan.users}</p>
              
              <p className="text-center text-3xl font-bold text-[#DB4C3F] mb-2">
                ₹{plan.price}
                <span className="text-base font-normal text-gray-600 ml-1">
                  /user/{billing === "monthly" ? "month" : "year"}
                </span>
              </p>
              
              {billing === "yearly" && plan.price !== 0 && (
                <p className="text-center text-sm text-green-600 mb-4">
                  Save ₹{plan.title === "PREMIUM" ? "600" : "1,200"} annually
                </p>
              )}

              <button className={`w-full py-3 px-4 rounded-lg font-medium mb-6 ${
                plan.popular 
                  ? "bg-[#DB4C3F] hover:bg-[#c14335] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-16">
          <h3 className="text-xl font-semibold mb-6">Compare plans and features</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 font-medium text-gray-700">Features</th>
                  <th className="p-3 font-medium text-gray-700 text-center">FREE</th>
                  <th className="p-3 font-medium text-gray-700 text-center">PREMIUM</th>
                  <th className="p-3 font-medium text-gray-700 text-center">ENTERPRISE</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 text-gray-700">{row.feature}</td>
                    <td className="p-3 text-center">{row.free}</td>
                    <td className="p-3 text-center">{row.premium}</td>
                    <td className="p-3 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Frequently asked questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">{faq.question}</h4>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#DB4C3F] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need help deciding?</h2>
          <p className="mb-6">
            Our team is happy to help you choose the right plan for your business.
          </p>
          <button className="bg-white text-[#DB4C3F] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
            Contact Sales
          </button>
        </div>
            <footer className="bg-gray-300 text-gray-700 py-10 px-4 md:px-20 mt-10">
  <div className="grid md:grid-cols-4 gap-8">
    {/* Column 1: Logo and Description */}
    <div>
      <h2 className="text-xl font-bold text-blue-600">TaskManager</h2>
      <p className="text-sm mt-2">
        Simple, streamlined, and powerful—TaskManager helps individuals and teams stay on top of their work with clarity and confidence.
      </p>
    </div>
    {/*Column 2: Quick Links*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
        <li><a href="/overview" className="hover:text-blue-600">Overview</a></li>
        <li><a href="/signup" className="hover:text-blue-600">Get Started</a></li>
      </ul>
    </div>
    {/*Column 3: Company*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Company</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
        <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
        <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
      </ul>
    </div>
    {/*Column 4: Newsletter*/}
    <div>
      <h3 className="text-md font-semibold mb-2">Stay Updated</h3>
      <p className="text-sm mb-2">Subscribe to receive product updates, tips, and productivity hacks.</p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button className="bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
    &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
  </div>
</footer>
      </div>
    </div>
  );
};

export default Pricing;