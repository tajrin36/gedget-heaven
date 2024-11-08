const Faq = () => {
    return (
        <div className="md:container md:mx-auto mt-10">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-2xl font-semibold text-[#9538E2]">What payment methods do you accept?</div>
                <div className="collapse-content">
                    <p className="text-black text-xl font-medium">We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-2xl font-semibold text-[#9538E2]">How long does shipping take?</div>
                <div className="collapse-content">
                    <p className="text-black text-xl font-medium">Shipping typically takes 5-10 business days after processing, which takes 2-3 days. A tracking link will be provided once your order ships.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-2xl font-semibold text-[#9538E2]">What is your return policy?</div>
                <div className="collapse-content">
                    <p className="text-black text-xl font-medium">We offer returns within 30 days of purchase for most products, provided they are in original condition. Some exclusions may apply.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-2xl font-semibold text-[#9538E2]">Do you offer warranties on your products?</div>
                <div className="collapse-content">
                    <p className="text-black text-xl font-medium">Yes, we provide a one-year warranty on all products. Certain items may qualify for extended warranties; check the product description for details.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-2xl font-semibold text-[#9538E2]">How can I reach customer support?</div>
                <div className="collapse-content">
                    <p className="text-black text-xl font-medium">Our support team is available via email, live chat, and phone. Visit our “Contact Us” page for more details.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;