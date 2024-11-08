const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-gray-100 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <div>
                        <h2 className="text-[#09080F] text-3xl font-bold">Gadget Heaven</h2>
                        <p className="text-black/60 text-base font-medium">Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <nav>
                            <h6 className="footer-title text-[#09080F] text-lg font-bold">Services</h6>
                            <div className="flex flex-col">
                                <a className="link link-hover text-black/60 text-base font-normal">Product Support</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Order Tracking</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Shipping & Delivery</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Returns</a>
                            </div>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-[#09080F] text-lg font-bold">Company</h6>
                            <div className="flex flex-col">
                                <a className="link link-hover text-black/60 text-base font-normal">About Us</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Careers</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Contact</a>
                            </div>
                        </nav>
                        


                        <nav>
                            <h6 className="footer-title text-[#09080F] text-lg font-bold">Legal</h6>
                            <div className="flex flex-col">
                                <a className="link link-hover text-black/60 text-base font-normal">Terms of Service</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Privacy Policy</a>
                                <a className="link link-hover text-black/60 text-base font-normal">Cookie Policy</a>
                            </div>
                        </nav>
                    </div>
                </nav>
                
            </footer>
        </div>
    );
};

export default Footer;