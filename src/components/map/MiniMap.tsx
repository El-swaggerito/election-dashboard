
const MiniMap = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-48 bg-slate-200">
        <img className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6mnaNXn8rQxP_Ye-cEgPf7nXCeQ80gBfKCGIcAld0trNqV4QL9YARMeiCI7kLF_i6XPexyNRNjxd1VWMqE97sUqgujyZI8gygLPn6PQ2LwAK0qSGV9dQQiAQwqf-GE720Xfv19s8SXhG2m13q54yPyFsfwt3swjJAMs4TkR0xHL0GOybikA17GcLyJRY0rZkpXB_6lWitFYpYmkGEMk0TUdsU-P3HCv1EztFI9QOoDeKvJu6wXR8d8hKn5wxKMvRr9fA98czzbw"/>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-white text-[10px] font-label uppercase tracking-widest px-2 py-1 rounded">Ikeja District View</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-headline font-bold mb-2">Spatial Distribution</h4>
        <p className="text-xs text-outline leading-relaxed">Turnout is significantly higher in eastern wards. 12 polling units in Oregun show clustering patterns indicative of irregular processing speed.</p>
      </div>
    </div>
  );
};

export default MiniMap;
