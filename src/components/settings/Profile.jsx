import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Perfil"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img
          src='https://media.licdn.com/dms/image/v2/D4D03AQHK3YopSiAoNw/profile-displayphoto-scale_100_100/B4DZtqEfF6KQAc-/0/1767011121187?e=1776297600&v=beta&t=A4kyvD-fYbz5_8j0sqJvbMuRRJlJemujs0ddT2GPjKg'
          alt='Profile'
          className='rounded-full w-20 h-20 object-cover mr-4'
        />

        <div>
          <h3 className='text-lg font-semibold text-gray-100'>Matheus Felipe</h3>
          <p className='text-gray-400'>matheus@email.com</p>
        </div>
      </div>

      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Editar Perfil
      </button>
    </SettingSection>
  );
}

export default Profile
