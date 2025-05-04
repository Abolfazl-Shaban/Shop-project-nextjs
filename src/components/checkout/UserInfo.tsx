'use client';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useTranslation } from 'react-i18next';

const UserInfo = () => {
  const { t , i18n} = useTranslation();

  return (
    <div>
      <h2 className='p-2 font-medium not-md:text-sm'>
        {t('checkout.userInfo.title')}
      </h2>
      <div className='text-dark-300 grid grid-cols-2 gap-6 rounded-xl border p-4 mb-2'>
        {/* Full Name */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='name'>
            {t('checkout.userInfo.fullName.label')}
          </label>
          <Input
            className='py-5'
            id='name'
            placeholder={t('checkout.userInfo.fullName.placeholder')}
          />
        </div>

        {/* Phone */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='phone'>
            {t('checkout.userInfo.phone.label')}
          </label>
          <Input
            className='py-5'
            id='phone'
            placeholder={t('checkout.userInfo.phone.placeholder')}
          />
        </div>

        {/* Province */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='ostan'>
            {t('checkout.userInfo.province.label')}
          </label>
          <Select dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
            <SelectTrigger id='ostan' className='w-full py-5'>
              <SelectValue
                placeholder={t('checkout.userInfo.province.placeholder')}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='khorasanrazavi'>
                {t('checkout.provinces.khorasanrazavi')}
              </SelectItem>
              <SelectItem value='tehran'>{t('checkout.provinces.tehran')}</SelectItem>
              <SelectItem value='esfahan'>{t('checkout.provinces.esfahan')}</SelectItem>
              <SelectItem value='ghom'>{t('checkout.provinces.ghom')}</SelectItem>
              <SelectItem value='ardbil'>{t('checkout.provinces.ardbil')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='city'>
            {t('checkout.userInfo.city.label')}
          </label>
          <Select dir={i18n.language == 'en' ? 'ltr' : 'rtl'}>
            <SelectTrigger id='city' className='w-full py-5'>
              <SelectValue
                placeholder={t('checkout.userInfo.city.placeholder')}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='mashhad'>{t('checkout.cities.mashhad')}</SelectItem>
              <SelectItem value='torbat'>{t('checkout.cities.torbat')}</SelectItem>
              <SelectItem value='nishabor'>{t('checkout.cities.nishabor')}</SelectItem>
              <SelectItem value='kashmar'>{t('checkout.cities.kashmar')}</SelectItem>
              <SelectItem value='tehran'>{t('checkout.cities.tehran')}</SelectItem>
              <SelectItem value='esfahan'>{t('checkout.cities.esfahan')}</SelectItem>
              <SelectItem value='karaj'>{t('checkout.cities.karaj')}</SelectItem>
              <SelectItem value='ardbil'>{t('checkout.cities.ardbil')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Address */}
        <div className='col-span-2'>
          <label className='p-1 px-3 text-sm' htmlFor='locaddress'>
            {t('checkout.userInfo.address.label')}
          </label>
          <Input
            className='py-5'
            id='locaddress'
            placeholder={t('checkout.userInfo.address.placeholder')}
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='postalcode'>
            {t('checkout.userInfo.postalCode.label')}
          </label>
          <Input
            className='py-5'
            id='postalcode'
            placeholder={t('checkout.userInfo.postalCode.placeholder')}
          />
        </div>

        {/* Plate */}
        <div>
          <label className='p-1 px-3 text-sm' htmlFor='plate'>
            {t('checkout.userInfo.plate.label')}
          </label>
          <Input
            className='py-5'
            id='plate'
            placeholder={t('checkout.userInfo.plate.placeholder')}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
