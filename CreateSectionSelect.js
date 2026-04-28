import { useOutletContext, useNavigate, useParams } from "react-router";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import MobileHeader from "../../components/MobileHeader";

const sections = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const classNames = {
  '7': 'Class VII',
  '8': 'Class VIII',
  '9': 'Class IX',
  '10': 'Class X',
  '11': 'Class XI',
  '12': 'Class XII',
};

export default function CreateSectionSelect() {
  const { onOpenSidebar } = useOutletContext();
  const navigate = useNavigate();
  const { classId } = useParams();

  const handleSelectSection = (section) => {
    navigate(`/teacher/create-class/${classId}/section/${section}/details`);
  };

  return (
    <div className="min-h-screen bg-[#eee] max-w-[440px] mx-auto">
      <MobileHeader title="Select Section" icon={<GraduationCap className="w-full h-full" />} onMenuClick={onOpenSidebar} showBack onBackClick={() => navigate('/teacher/create-class')} />
      <div className="p-[16px] pb-[40px]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-[24px]">
          <div className="inline-block bg-[#5c2d2d]/10 px-[12px] py-[6px] rounded-[8px] mb-[10px]">
            <p className="text-[12px] text-[#5c2d2d]" style={{ fontWeight: 600 }}>
              {classNames[classId || '9']}
            </p>
          </div>
          <h2 className="text-[20px] text-black mb-[6px]" style={{ fontWeight: 700 }}>Choose Section</h2>
          <p className="text-[13px] text-[#7d7d7d]">Select the section for this class</p>
        </motion.div>
        <div className="grid grid-cols-4 gap-[12px]">
          {sections.map((section, index) => (
            <motion.button key={section} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.02 }} onClick={() => handleSelectSection(section)} className="bg-white rounded-[14px] p-[18px] shadow-sm hover:shadow-md transition-all active:scale-[0.95] text-center">
              <p className="text-[22px] text-[#5c2d2d]" style={{ fontWeight: 700 }}>{section}</p>
            </motion.button>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-[24px] bg-[#31dd67]/10 border border-[#31dd67]/30 rounded-[14px] p-[16px]">
          <p className="text-[12px] text-[#1a0f0f]">
            <span style={{ fontWeight: 600 }}>Next Step:</span> After selecting a section, you'll add subject details, description, and a background image.
          </p>
        </motion.div>
      </div>
    </div>
  );
}