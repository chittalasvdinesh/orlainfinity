import React from 'react'
import Style from './form.module.css'

const Form = () => {
  return (
    <div id="bookingForm" className="mt-16 lg:mt-4 font-radikalLight">
      <h1 className="text-center text-[28px] lg:text-[36px] lg:pt-20">
        <span className="font-[radikalLight]">BOOK YOUR PRIVATE MEETING</span>
      </h1>
      <p className="text-center text-[14px] lg:text-[24px] mt-[18px] uppercase">
        <span className="font-[radikalLight]">Prices Starting From</span>
      </p>
      <p className="text-center text-[16px] lg:text-[22px] mt-[4px]">
        AED 66M | USD 18M | EUR 16.6M | GBP 14M
      </p>

      <div className="flex justify-center">
        <form id="privateBookingForm" action="" className="flex flex-col mt-10 w-[90%] lg:w-[60%] gap-y-4 font-[radikalLight]">
          <div className="grid grid-cols-2 gap-5 w-full">
            <input type="text" placeholder="*First Name" className={Style.input_element} id="first_name1" required="" />
            <input type="text" placeholder="*Last Name" className={Style.input_element} id="last_name1" required="" />
          </div>
          <input type="email" placeholder="*Your Email" className={Style.input_element} id="email1" required="" />
          <div className="flex gap-2 w-full relative secondDial">
            <input type="number" id="phone1" placeholder="Your Phone No" className={`${Style.input_element} flex-grow`} required="" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <select autocomplete="off" className={Style.input_element} name="prefered_lang" id="prefered_lang1" required="">
              <option className="hidden" value="" disabled="" selected="">
                Preferred Language
              </option>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
              <option value="Russian">Russian</option>
            </select>
            <select autocomplete="off" className={Style.input_element} name="nationality" id="nationality1" required="">
              <option className="hidden" value="" disabled="" selected="">
                Nationality
              </option>
              <option className="form-select-option" value="Afghan">Afghan</option>
              <option className="form-select-option" value="Albanian">
                Albanian
              </option>
              <option className="form-select-option" value="Algerian">
                Algerian
              </option>
              <option className="form-select-option" value="American">
                American
              </option>
              <option className="form-select-option" value="Andorran">
                Andorran
              </option>
              <option className="form-select-option" value="Angolan">
                Angolan
              </option>
              <option className="form-select-option" value="Antiguans">
                Antiguans
              </option>
              <option className="form-select-option" value="Argentinean">
                Argentinean
              </option>
              <option className="form-select-option" value="Armenian">
                Armenian
              </option>
              <option className="form-select-option" value="Australian">
                Australian
              </option>
              <option className="form-select-option" value="Austrian">
                Austrian
              </option>
              <option className="form-select-option" value="Azerbaijani">
                Azerbaijani
              </option>
              <option className="form-select-option" value="Bahamian">
                Bahamian
              </option>
              <option className="form-select-option" value="Bahraini">
                Bahraini
              </option>
              <option className="form-select-option" value="Bangladeshi">
                Bangladeshi
              </option>
              <option className="form-select-option" value="Barbadian">
                Barbadian
              </option>
              <option className="form-select-option" value="Barbudans">
                Barbudans
              </option>
              <option className="form-select-option" value="Batswana">
                Batswana
              </option>
              <option className="form-select-option" value="Belarusian">
                Belarusian
              </option>
              <option className="form-select-option" value="Belgian">
                Belgian
              </option>
              <option className="form-select-option" value="Belizean">
                Belizean
              </option>
              <option className="form-select-option" value="Beninese">
                Beninese
              </option>
              <option className="form-select-option" value="Bhutanese">
                Bhutanese
              </option>
              <option className="form-select-option" value="Bolivian">
                Bolivian
              </option>
              <option className="form-select-option" value="Bosnian">
                Bosnian
              </option>
              <option className="form-select-option" value="Brazilian">
                Brazilian
              </option>
              <option className="form-select-option" value="British">
                British
              </option>
              <option className="form-select-option" value="Bruneian">
                Bruneian
              </option>
              <option className="form-select-option" value="Bulgarian">
                Bulgarian
              </option>
              <option className="form-select-option" value="Burkinabe">
                Burkinabe
              </option>
              <option className="form-select-option" value="Burmese">
                Burmese
              </option>
              <option className="form-select-option" value="Burundian">
                Burundian
              </option>
              <option className="form-select-option" value="Cambodian">
                Cambodian
              </option>
              <option className="form-select-option" value="Cameroonian">
                Cameroonian
              </option>
              <option className="form-select-option" value="Canadian">
                Canadian
              </option>
              <option className="form-select-option" value="Cape Verdean">
                Cape Verdean
              </option>
              <option className="form-select-option" value="Central African">
                Central African
              </option>
              <option className="form-select-option" value="Chadian">
                Chadian
              </option>
              <option className="form-select-option" value="Chilean">
                Chilean
              </option>
              <option className="form-select-option" value="Chinese">
                Chinese
              </option>
              <option className="form-select-option" value="Colombian">
                Colombian
              </option>
              <option className="form-select-option" value="Comoran">
                Comoran
              </option>
              <option className="form-select-option" value="Congolese">
                Congolese
              </option>
              <option className="form-select-option" value="Costa Rican">
                Costa Rican
              </option>
              <option className="form-select-option" value="Croatian">
                Croatian
              </option>
              <option className="form-select-option" value="Cuban">Cuban</option>
              <option className="form-select-option" value="Cypriot">
                Cypriot
              </option>
              <option className="form-select-option" value="Czech">Czech</option>
              <option className="form-select-option" value="Danish">Danish</option>
              <option className="form-select-option" value="Djibouti">
                Djibouti
              </option>
              <option className="form-select-option" value="Dominican">
                Dominican
              </option>
              <option className="form-select-option" value="Dutch">Dutch</option>
              <option className="form-select-option" value="East Timorese">
                East Timorese
              </option>
              <option className="form-select-option" value="Ecuadorean">
                Ecuadorean
              </option>
              <option className="form-select-option" value="Egyptian">
                Egyptian
              </option>
              <option className="form-select-option" value="Emirati">
                Emirati
              </option>
              <option className="form-select-option" value="Equatorial Guinean">
                Equatorial Guinean
              </option>
              <option className="form-select-option" value="Eritrean">
                Eritrean
              </option>
              <option className="form-select-option" value="Estonian">
                Estonian
              </option>
              <option className="form-select-option" value="Ethiopian">
                Ethiopian
              </option>
              <option className="form-select-option" value="Fijian">Fijian</option>
              <option className="form-select-option" value="Filipino">
                Filipino
              </option>
              <option className="form-select-option" value="Finnish">
                Finnish
              </option>
              <option className="form-select-option" value="French">French</option>
              <option className="form-select-option" value="Gabonese">
                Gabonese
              </option>
              <option className="form-select-option" value="Gambian">
                Gambian
              </option>
              <option className="form-select-option" value="Georgian">
                Georgian
              </option>
              <option className="form-select-option" value="German">German</option>
              <option className="form-select-option" value="Ghanaian">
                Ghanaian
              </option>
              <option className="form-select-option" value="Greek">Greek</option>
              <option className="form-select-option" value="Grenadian">
                Grenadian
              </option>
              <option className="form-select-option" value="Guatemalan">
                Guatemalan
              </option>
              <option className="form-select-option" value="Guinea-Bissauan">
                Guinea-Bissauan
              </option>
              <option className="form-select-option" value="Guinean">
                Guinean
              </option>
              <option className="form-select-option" value="Guyanese">
                Guyanese
              </option>
              <option className="form-select-option" value="Haitian">
                Haitian
              </option>
              <option className="form-select-option" value="Herzegovinian">
                Herzegovinian
              </option>
              <option className="form-select-option" value="Honduran">
                Honduran
              </option>
              <option className="form-select-option" value="Hungarian">
                Hungarian
              </option>
              <option className="form-select-option" value="Icelander">
                Icelander
              </option>
              <option className="form-select-option" value="I-Kiribati">
                I-Kiribati
              </option>
              <option className="form-select-option" value="Indian">Indian</option>
              <option className="form-select-option" value="Indonesian">
                Indonesian
              </option>
              <option className="form-select-option" value="Iranian">
                Iranian
              </option>
              <option className="form-select-option" value="Iraqi">Iraqi</option>
              <option className="form-select-option" value="Irish">Irish</option>
              <option className="form-select-option" value="Israeli">
                Israeli
              </option>
              <option className="form-select-option" value="Italian">
                Italian
              </option>
              <option className="form-select-option" value="Ivorian">
                Ivorian
              </option>
              <option className="form-select-option" value="Jamaican">
                Jamaican
              </option>
              <option className="form-select-option" value="Japanese">
                Japanese
              </option>
              <option className="form-select-option" value="Jordanian">
                Jordanian
              </option>
              <option className="form-select-option" value="Kazakhstani">
                Kazakhstani
              </option>
              <option className="form-select-option" value="Kenyan">Kenyan</option>
              <option className="form-select-option" value="Kittian and Nevisian">
                Kittian and Nevisian
              </option>
              <option className="form-select-option" value="Kuwaiti">
                Kuwaiti
              </option>
              <option className="form-select-option" value="Kyrgyz">Kyrgyz</option>
              <option className="form-select-option" value="Laotian">
                Laotian
              </option>
              <option className="form-select-option" value="Latvian">
                Latvian
              </option>
              <option className="form-select-option" value="Lebanese">
                Lebanese
              </option>
              <option className="form-select-option" value="Liberian">
                Liberian
              </option>
              <option className="form-select-option" value="Libyan">Libyan</option>
              <option className="form-select-option" value="Liechtensteiner">
                Liechtensteiner
              </option>
              <option className="form-select-option" value="Lithuanian">
                Lithuanian
              </option>
              <option className="form-select-option" value="Luxembourger">
                Luxembourger
              </option>
              <option className="form-select-option" value="Macedonian">
                Macedonian
              </option>
              <option className="form-select-option" value="Malagasy">
                Malagasy
              </option>
              <option className="form-select-option" value="Malawian">
                Malawian
              </option>
              <option className="form-select-option" value="Malaysian">
                Malaysian
              </option>
              <option className="form-select-option" value="Maldivian">
                Maldivian
              </option>
              <option className="form-select-option" value="Malian">Malian</option>
              <option className="form-select-option" value="Maltese">
                Maltese
              </option>
              <option className="form-select-option" value="Marshallese">
                Marshallese
              </option>
              <option className="form-select-option" value="Mauritanian">
                Mauritanian
              </option>
              <option className="form-select-option" value="Mauritian">
                Mauritian
              </option>
              <option className="form-select-option" value="Mexican">
                Mexican
              </option>
              <option className="form-select-option" value="Micronesian">
                Micronesian
              </option>
              <option className="form-select-option" value="Moldovan">
                Moldovan
              </option>
              <option className="form-select-option" value="Monacan">
                Monacan
              </option>
              <option className="form-select-option" value="Mongolian">
                Mongolian
              </option>
              <option className="form-select-option" value="Moroccan">
                Moroccan
              </option>
              <option className="form-select-option" value="Mosotho">
                Mosotho
              </option>
              <option className="form-select-option" value="Motswana">
                Motswana
              </option>
              <option className="form-select-option" value="Mozambican">
                Mozambican
              </option>
              <option className="form-select-option" value="Namibian">
                Namibian
              </option>
              <option className="form-select-option" value="Nauruan">
                Nauruan
              </option>
              <option className="form-select-option" value="Nepalese">
                Nepalese
              </option>
              <option className="form-select-option" value="New Zealander">
                New Zealander
              </option>
              <option className="form-select-option" value="Nicaraguan">
                Nicaraguan
              </option>
              <option className="form-select-option" value="Nigerian">
                Nigerian
              </option>
              <option className="form-select-option" value="Nigerien">
                Nigerien
              </option>
              <option className="form-select-option" value="Ni-Vanuatu">
                Ni-Vanuatu
              </option>
              <option className="form-select-option" value="Northern Irish">
                Northern Irish
              </option>
              <option className="form-select-option" value="North Korean">
                North Korean
              </option>
              <option className="form-select-option" value="Norwegian">
                Norwegian
              </option>
              <option className="form-select-option" value="Omani">Omani</option>
              <option className="form-select-option" value="Pakistani">
                Pakistani
              </option>
              <option className="form-select-option" value="Palauan">
                Palauan
              </option>
              <option className="form-select-option" value="Panamanian">
                Panamanian
              </option>
              <option className="form-select-option" value="Papua New Guinean">
                Papua New Guinean
              </option>
              <option className="form-select-option" value="Paraguayan">
                Paraguayan
              </option>
              <option className="form-select-option" value="Peruvian">
                Peruvian
              </option>
              <option className="form-select-option" value="Polish">Polish</option>
              <option className="form-select-option" value="Portuguese">
                Portuguese
              </option>
              <option className="form-select-option" value="Qatari">Qatari</option>
              <option className="form-select-option" value="Romanian">
                Romanian
              </option>
              <option className="form-select-option" value="Russian">
                Russian
              </option>
              <option className="form-select-option" value="Rwandan">
                Rwandan
              </option>
              <option className="form-select-option" value="Saint Lucian">
                Saint Lucian
              </option>
              <option className="form-select-option" value="Salvadoran">
                Salvadoran
              </option>
              <option className="form-select-option" value="Samoan">Samoan</option>
              <option className="form-select-option" value="San Marinese">
                San Marinese
              </option>
              <option className="form-select-option" value="Sao Tomean">
                Sao Tomean
              </option>
              <option className="form-select-option" value="Saudi">Saudi</option>
              <option className="form-select-option" value="Scottish">
                Scottish
              </option>
              <option className="form-select-option" value="Senegalese">
                Senegalese
              </option>
              <option className="form-select-option" value="Serbian">
                Serbian
              </option>
              <option className="form-select-option" value="Seychellois">
                Seychellois
              </option>
              <option className="form-select-option" value="Sierra Leonean">
                Sierra Leonean
              </option>
              <option className="form-select-option" value="Singaporean">
                Singaporean
              </option>
              <option className="form-select-option" value="Slovakian">
                Slovakian
              </option>
              <option className="form-select-option" value="Slovenian">
                Slovenian
              </option>
              <option className="form-select-option" value="Solomon Islander">
                Solomon Islander
              </option>
              <option className="form-select-option" value="Somali">Somali</option>
              <option className="form-select-option" value="South African">
                South African
              </option>
              <option className="form-select-option" value="South Korean">
                South Korean
              </option>
              <option className="form-select-option" value="Spanish">
                Spanish
              </option>
              <option className="form-select-option" value="Sri Lankan">
                Sri Lankan
              </option>
              <option className="form-select-option" value="Sudanese">
                Sudanese
              </option>
              <option className="form-select-option" value="Surinamer">
                Surinamer
              </option>
              <option className="form-select-option" value="Swazi">Swazi</option>
              <option className="form-select-option" value="Swedish">
                Swedish
              </option>
              <option className="form-select-option" value="Swiss">Swiss</option>
              <option className="form-select-option" value="Syrian">Syrian</option>
              <option className="form-select-option" value="Taiwanese">
                Taiwanese
              </option>
              <option className="form-select-option" value="Tajik">Tajik</option>
              <option className="form-select-option" value="Tanzanian">
                Tanzanian
              </option>
              <option className="form-select-option" value="Thai">Thai</option>
              <option className="form-select-option" value="Togolese">
                Togolese
              </option>
              <option className="form-select-option" value="Tongan">Tongan</option>
              <option className="form-select-option" value="Trinidadian or Tobagonian">
                Trinidadian or Tobagonian
              </option>
              <option className="form-select-option" value="Tunisian">
                Tunisian
              </option>
              <option className="form-select-option" value="Turkish">
                Turkish
              </option>
              <option className="form-select-option" value="Tuvaluan">
                Tuvaluan
              </option>
              <option className="form-select-option" value="Ugandan">
                Ugandan
              </option>
              <option className="form-select-option" value="Ukrainian">
                Ukrainian
              </option>
              <option className="form-select-option" value="Uruguayan">
                Uruguayan
              </option>
              <option className="form-select-option" value="Uzbekistani">
                Uzbekistani
              </option>
              <option className="form-select-option" value="Venezuelan">
                Venezuelan
              </option>
              <option className="form-select-option" value="Vietnamese">
                Vietnamese
              </option>
              <option className="form-select-option" value="Welsh">Welsh</option>
              <option className="form-select-option" value="Yemenite">
                Yemenite
              </option>
              <option className="form-select-option" value="Zambian">
                Zambian
              </option>
              <option className="form-select-option" value="Zimbabwean">
                Zimbabwean
              </option>
            </select>
          </div>
          {/* <!-- <select
          autocomplete="off"
          className={Style.input_element}
          name="budget"
          id="budget1"
          required
        >
          <option className="hidden" value="" disabled selected>Budget</option>
          <option value="Below 60M">Below 60M</option>
          <option value="Above 60M">Above 60M</option>
        </select> --> */}
          <select autocomplete="off" className={Style.input_element} id="preferred_method1" required="">
            <option className="hidden" value="" disabled="" selected="">
              Preferred method of contact
            </option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="whatsapp">Whatsapp</option>
          </select>
          <div className="flex justify-center mt-8">
            <button type="submit" className={`${Style.submit_btn} w-[180px]`}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
