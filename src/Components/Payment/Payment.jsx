
import { Box, Button, Checkbox, Flex, FormControl, HStack, IconButton, Image, Input, Modal, ModalBody, ModalContent, ModalOverlay, PinInput, PinInputField, Radio, RadioGroup, Select, Spacer, Text, VStack, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiFillTag } from 'react-icons/ai';
import { FaMoon, FaSun } from "react-icons/fa";
import { BsFill1SquareFill, BsFill2SquareFill, BsFill3SquareFill, BsFill4SquareFill, BsFillInfoCircleFill, BsLightningChargeFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { GrFormAdd, GrFormSubtract, GrRadialSelected } from 'react-icons/gr';

import { TfiHeadphoneAlt } from 'react-icons/tfi';
// import Logo from './LogoPic.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Payment() {
  const [CardPay, setCardPay] = useState(true);
  const [RazorPay, setRazorPay] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [theme, settheme] = useState(false);
  const storedata = useSelector(state => state.hotels)
  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const len = storedata?.destinations?.length
  const [traveller, settraveller] = useState(1);
  const toast = useToast()
  const navigate = useNavigate()
  const [chk, setchk]=useState(false)
  const [pin, setpin] = useState({
    first: '',
    sec: '',
    third: '',
    fourth: ''
  })
  const [formdata, setformdata] = useState({
    title: '',
    first_N: '',
    last_N: '',
    email: '',
    phone:'',
    day:'',
    month:'',
    year:'',
    gender:'',
    nationality:'',
    c_holder:'',
    c_number:'',
    exp_day:'',
    cvv:''
  })

  useEffect(() => {

    window.scrollTo({
      top: 0, 
    });

    storedata?.destinations?.filter((el, i) => {
      if (i === 0) {
        setstart(el)
      }
      if (i === len - 1) {
        setend(el)
      }
      return el;
    })
  }, [])

  
  const basepr = storedata?.price*10;

  const discountVal = basepr*0.3;

  const totalDue = basepr-discountVal;

  const dueNext = totalDue -  storedata?.price;

  const mainImg = storedata?.main_img;

  console.log(typeof(storedata?.price));

  const handlePayment = () => {

    const Pr = traveller * storedata?.price;
    const checkout = Pr * 100;
    console.log(checkout);

    const options = {
      key: "rzp_test_dnv3nQiWbqzTGt",
      amount: checkout,
      currency: "INR",
      name: "Adventour",
      description: "Payment",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL6nri4shJQY02h95CkKAzHit6ZjuPGvrapODPp-XDCjnnRN2etJ2hG0jVXCTfw_Pa1VSHh41N-0EA9SIfm3Bvag4MtMOLU-6vqbs4JUUNfihajY3DNFPay7GrkgaLmANNdJE22IsXvsjSq_VDjpTIZe-3CJq8vRqXtn_K_ms9xToGYX88d0cKq6_a5nw/s16000/Screenshot%20(27).png",
      handler: function (response) {
        console.log(response); // Update the state to indicate payment completion
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleRadioChange = (value) => {
    setRazorPay(true);
    setCardPay(false);
  };
  const handleRadioChange2 = (value) => {
    setCardPay(true);
    setRazorPay(false);
  };

  return (


    // {theme && (
    //   <Box
    //   minH={'100vh'}
    //   bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'}
    //   color={theme ? 'white' : 'blackAlpha.800'}
    //   position="relative"
    //   zIndex={-1}
    // >
       <Box minH={'100vh'} bg={theme ? '#101214' : 'gray.100'}  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} color={theme ? 'white' : 'blackAlpha.800'} > 
      {/* <Toggle /> */}
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="md"
        position="fixed"
        bottom={4}
        left={4}
        zIndex={'4'}
        onClick={() => {if(theme){settheme(false)}else{settheme(true)}}} icon={theme ? <FaSun /> : <FaMoon />}
      />

    <Box minH={'100vh'} bg={theme ? '#101214' : 'gray.100'} color={theme ? 'white' : 'blackAlpha.800'}>
      {/* <Toggle /> */}

      {/* navbar-box */}
      {/* <Box bg={theme ? '#191b1d' : 'white'} py={'15px'}>
        <HStack w={{ base: "95%", md: "95%", lg: '76%' }} m={'auto'} >
          <Flex alignItems={"center"}>
            {/* <Image src={Logo} alt='logo' w={"70px"} px={"8px"} /> */}
            <Text fontSize={"1.2rem"} fontWeight={"800"} >Adventour.</Text>
          </Flex>
          <Spacer />

          <Text display={{ base: "none", md: "block", lg: "block" }} pr={'10px'}>+1 844 311 8331</Text>
          <HStack _hover={{ bg: !theme ? 'gray.300' : 'gray.700' }} bg={theme ? 'gray.800' : 'gray.200'} display={{ base: "none", md: "flex", lg: "flex" }} borderRadius={'20px'} py={'10px'} px={'18px'}>
            <TfiHeadphoneAlt />
            <Box color={theme ? 'white' : 'blackAlpha.800'} colorScheme='none'>Book as Travel Agent</Box>
          </HStack>
        </HStack>
      </Box> */}

      {/* Midbox-start */}
      <Box w={{ base: "92%", md: "95%", lg: '76%' }} m={'auto'}>
        {/* Heading flex */}
        <Flex mb={-3} pb={1} py={'30px'}>
        <Image src="https://imgs.search.brave.com/O1K0BjlIPGnMx_utdR9PmaFis4lPYgm59Y9c29kprGM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjAxLzIwMTQy/Ni5wbmc" alt="" w="30px" h="30px" filter={theme ? 'invert(100%)' : 'none'}/>
        <Text pb={'20px'} fontSize={'20px'} fontWeight={'600'}>&nbsp;&nbsp;&nbsp;Your Booking overview</Text>
          <Spacer />
          <Button colorScheme='none' bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} color={theme ? 'white' : 'blackAlpha.800'} mr={'10px'} borderRadius={'20px'} display={{ base: 'none', md: 'block', lg: 'block' }}>Help</Button>
          <Button colorScheme='none' bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} color={theme ? 'white' : 'blackAlpha.800'} borderRadius={'20px'} display={{ base: 'none', md: 'block', lg: 'block' }}>Share Tour</Button>
        </Flex>

        {/* Main content-start */}
        <Flex justifyContent={'space-between'}>
          {/* left box */}
          <Box  w={{ base: "100%", md: "100%", lg: '67%' }}>
            <Box  boxShadow={'md'} p={'20px'}   bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} borderRadius={'15px'}>
              
              <Text fontSize={{ base: "20px", md: '33px', lg: '33px' }} fontWeight={'600'}>{storedata?.title}</Text>
              <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                
                <Box border={'1px solid gray'} bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} w={{ base: "100%", md: "35%", lg: '35%' }} p={'20px'} borderRadius={{ base: '15px 15px 0 0', md: '15px 0 0 15px', lg: '15px 0 0 15px' }}>
                <Image
                src={mainImg}
                alt="Description of the image"
                fallbackSrc="/path/to/fallback/image.jpg"
                />
                  <Text fontSize={'18px'} fontWeight={'700'}>Sunday, August 20th, 2023</Text>
                  <Text fontSize={'15px'}>to Thursday, August 31st, 2023</Text>
                  <Text>Change date</Text>
                </Box>
                <Box border={'1px solid gray'} bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'}  w={{ base: "100%", md: "65%", lg: '65%' }} p={'20px'} borderRadius={{ base: '0 0 15px 15px', md: '0 15px 15px 0', lg: '0 15px 15px 0' }}>
                  <Flex py={'5px'}><AiFillCheckCircle size={'35px'} /><Text pt={'5px'} px={'10px'}>Only ₹{(storedata?.price)?.toLocaleString("en-US")} upfront per person The remaining amount will be due on July 1st, 2023</Text></Flex>
                  <Flex py={'5px'}><FaUserFriends size={'25px'} /><Text px={'10px'}>6 spaces left and yours is reserved for the next 10 minutes</Text></Flex>
                  <Flex py={'5px'}><BsLightningChargeFill size={'22px'} /><Text px={'10px'}>Instant Book: Your spaces will be instantly secured.</Text></Flex>
                  <Flex py={'5px'}><AiFillTag size={'22px'} /><Text px={'10px'}>Special deal. See details</Text></Flex>
                </Box>
              </Flex>
            </Box>
            <Box my={'25px'} p={'20px'}  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} borderRadius={'15px'}  boxShadow={'md'}>
              <HStack >
                {/* <BsFill1SquareFill size={'30px'} /> */}
                <Image src="https://img.icons8.com/?size=512&id=uycYbKOpjcvE&format=png" alt="" w="50px"/>
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>How many are travelling?</Text>
              </HStack>
              <HStack  mt={'30px'}>
                <Text fontWeight={'700'}>{traveller} x Traveller</Text>
                <Spacer />
                <HStack>
                  <IconButton  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} isDisabled={traveller === 1} onClick={() => { settraveller(pre => pre - 1) }} icon={<GrFormSubtract size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
                  <Text px={'10px'}>{traveller}</Text>
                  <IconButton  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} isDisabled={traveller === storedata?.group_size} onClick={() => { settraveller(pre => pre + 1) }} icon={<GrFormAdd size={'25px'} />} rounded={'full'} boxShadow={'lg'} />
                </HStack>
              </HStack>
            </Box>

            <Box p={'20px'} bg={theme ? '#191b1d' : 'white'} bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} boxShadow={'md'} borderRadius={'15px'}>
              <HStack>
                {/* <BsFill2SquareFill size={'30px'} /> */}
                <Image src="https://imgs.search.brave.com/npnvI8BvSTgBz_t_12K0xeCvn2ZGOl0etRWilh6dJvM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODE4Mi84MTgy/NjI5LnBuZw" alt="" w="40px" />
                <Text px={'10px'} fontWeight={'700'} fontSize={'20px'}>Add traveller details</Text>
              </HStack>
              <HStack ml={'8px'} borderRadius={'15px'} p={'20px'} bg={theme ? 'gray.800' : "gray.200"} my={'25px'}>
                <BsFillInfoCircleFill size={'25px'} />
                <HStack px={'10px'} fontWeight={{ base: "500", md: '700', lg: '700' }} fontSize={{ base: "14px", md: '16', lg: '16' }}><Text>Please note:</Text><Text > Traveller details should match information on passport</Text></HStack>
              </HStack>
              <Box>
                <Text px={'10px'} fontWeight={'700'}>Lead Traveller</Text>
                <Text px={'10px'}>This traveller will serve as the contact person for the booking.</Text>
              </Box>
              {console.log(formdata)}
              <RadioGroup py={'35px'} >
                <HStack >
                  <Text fontWeight={'700'} fontSize={'14px'} px={'10px'}>Title*</Text>
                  <Radio value='Mr.' onChange={(e)=>{setformdata({...formdata, title:e.target.value})}}>Mr.</Radio>
                  <Radio value='Ms.' onChange={(e)=>{setformdata({...formdata, title:e.target.value})}}>Ms.</Radio>
                  <Radio value='Mrs.' onChange={(e)=>{setformdata({...formdata, title:e.target.value})}}>Mrs.</Radio>
                  <Radio value='Miss' onChange={(e)=>{setformdata({...formdata, title:e.target.value})}}>Miss</Radio>
                </HStack>
              </RadioGroup>
              <FormControl ml={'13px'} >
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "90px", paddingLeft: "6px" }}>First Name*</label>
                  <Input  autoComplete='on' onChange={(e)=>{setformdata({...formdata, first_N:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text' />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "85px", paddingLeft: "6px" }}>Last Name*</label>
                  <Input autoComplete='on' onChange={(e)=>{setformdata({...formdata, last_N:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text' />
                </VStack>
                <VStack align={'left'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "55px", paddingLeft: "6px" }}>Email*</label>
                  <Input autoComplete='on' onChange={(e)=>{setformdata({...formdata, email:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='email' />
                </VStack>
                <VStack align={'left'} my={'20px'}>
                  <label style={{ marginBottom: '-19px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "115px", paddingLeft: "6px" }}>Phone Number*</label>
                  <Input autoComplete='on' onChange={(e)=>{setformdata({...formdata, phone:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='tel' placeholder='e.g. +91 9876543210' />
                </VStack>
                <Text fontWeight={'700'} mb={'15px'} fontSize={'16px'}>Date of Birth*</Text>
                <HStack>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "35px", paddingLeft: "6px" }}>Day</label>
                    <Select onChange={(e)=>{setformdata({...formdata, day:e.target.value})}} size={'lg'} w={'80px'} border={'1px solid silver'}>
                      <option value="" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}> </option>
                      <option value="01" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>01</option>
                      <option value="02" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>02</option>
                      <option value="03" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>03</option>
                      <option value="04" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>04</option>
                      <option value="05" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>05</option>
                      <option value="06" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>06</option>
                      <option value="07" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>07</option>
                      <option value="08" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>08</option>
                      <option value="09" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>09</option>
                      <option value="10" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>10</option>
                      <option value="11" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>11</option>
                      <option value="12" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>12</option>
                      <option value="13" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>13</option>
                      <option value="14" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>14</option>
                      <option value="15" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>15</option>
                      <option value="16" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>16</option>
                      <option value="17" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>17</option>
                      <option value="18" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>18</option>
                      <option value="19" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>19</option>
                      <option value="20" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>20</option>
                      <option value="21" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>21</option>
                      <option value="22" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>22</option>
                      <option value="23" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>23</option>
                      <option value="24" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>24</option>
                      <option value="25" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>25</option>
                      <option value="26" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>26</option>
                      <option value="27" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>27</option>
                      <option value="28" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>28</option>
                      <option value="29" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>29</option>
                      <option value="30" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>30</option>
                      <option value="31" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>31</option>
                    </Select>
                  </Box>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "58px", paddingLeft: "6px" }}>Month</label>
                    <Select onChange={(e)=>{setformdata({...formdata, month:e.target.value})}} bg={theme ? '#191b1d' : 'white'} size={'lg'} w={{ base: '100px', md: '145px', lg: '145px' }} border={'1px solid silver'} >
                      <option value="00" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}> </option>
                      <option value="01" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>January</option>
                      <option value="02" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>February</option>
                      <option value="03" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>March</option>
                      <option value="04" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>April</option>
                      <option value="05" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>May</option>
                      <option value="06" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>June</option>
                      <option value="07" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>July</option>
                      <option value="08" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>August</option>
                      <option value="09" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>September</option>
                      <option value="10" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>October</option>
                      <option value="11" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>November</option>
                      <option value="12" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>December</option>
                    </Select>
                  </Box>
                  <Box position={'relative'}>
                    <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "40px", paddingLeft: "6px" }}>Year</label>
                    <Select onChange={(e)=>{setformdata({...formdata, year:e.target.value})}} size={'lg'}  w={'80px'} border={'1px solid silver'}>
                    <option value="" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}></option>
                      <option value="1988" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1988</option>
                      <option value="1989" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1989</option>
                      <option value="1990" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1990</option>
                      <option value="1991" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1991</option>
                      <option value="1992" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1992</option>
                      <option value="1993" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1993</option>
                      <option value="1994" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1994</option>
                      <option value="1995" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1995</option>
                      <option value="1996" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1996</option>
                      <option value="1997" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1997</option>
                      <option value="1998" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1998</option>
                      <option value="1999" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>1999</option>
                      <option value="2000" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2000</option>
                      <option value="2001" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2001</option>
                      <option value="2002" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2002</option>
                      <option value="2003" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2003</option>
                      <option value="2004" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2004</option>
                      <option value="2005" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2005</option>
                      <option value="2006" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2006</option>
                      <option value="2007" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2007</option>
                      <option value="2008" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2008</option>
                      <option value="2009" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2009</option>
                      <option value="2010" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>2010</option>
                    </Select>
                  </Box>
                </HStack>
                <RadioGroup py={'35px'} isRequired>
                  <HStack>
                    <Text fontWeight={'700'} fontSize={'15px'} px={'10px'}>Gender*</Text>
                    <Radio value='male' onChange={(e)=>{setformdata({...formdata, gender:e.target.value})}}>Male</Radio>
                    <Radio value='female' onChange={(e)=>{setformdata({...formdata, gender:e.target.value})}}>Female</Radio>
                  </HStack>
                </RadioGroup>
                <Box position={'relative'}>
                  <label style={{ position: 'absolute', top: '-9px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "90px", paddingLeft: "6px" }}>Nationality*</label>
                  <Select onChange={(e)=>{setformdata({...formdata, nationality:e.target.value})}} w={'45%'} size={'lg'} border={'1px solid silver'} >
                    <option value="" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}></option>
                    <option value="India" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>India</option>
                    <option value="Russia" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>Russia</option>
                    <option value="Nepal" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>Nepal</option>
                    <option value="Sri_lanka" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>Sri lanka</option>
                    <option value="Bhutan" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>Bhutan</option>
                    <option value="France" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>France</option>
                    <option value="USA" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>USA</option>
                    <option value="Germany" style={{ backgroundColor: theme ? '#191b1d' : 'white' }}>Germany</option>
                  </Select>
                </Box>
              </FormControl>

            </Box>

            {/* <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
              <HStack>
                <BsFill3SquareFill size={'30px'} />
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>Adventour Savings</Text>
              </HStack>
              <Text mt={'30px'} mb={'8px'} color={'blue.500'} cursor={'pointer'} onClick={()=>{
                // toast({
                //   title: "No promo code available",
                //   status: 'info',
                //   position: 'top',
                //   duration: 3000,
                //   isClosable: true,
                // });
              }}>
                 <VStack align={'left'}>
                  <Input  autoComplete='on' placeholder='Apply Promo' onChange={(e)=>{setformdata({...formdata, first_N:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size={'lg'} border={'1px solid silver'} type='text' />
                </VStack>
              </Text>
            </Box> */}
            {/* vivek */}
            <Box  my={'25px'} p={'20px'} boxShadow={'md'}  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} borderRadius={'15px'}>
              <HStack>
                {/* <BsFill4SquareFill size={'30px'} /> */}
                <Image src="https://imgs.search.brave.com/5kV9NVHbCqXcZFz5EZFlxu7g2xUSQ7R12PYMTuaRp7M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcHBz/LnNob3BpZnkuY29t/L2Nkbi9zaG9waWZ5/Y2xvdWQvc2hvcGlm/eV9hcHBfc3RvcmUv/YXNzZXRzL2FwcF9k/ZXRhaWxzX3BhZ2Uv/ZmVhdHVyZS1pY29u/LWZlMjdhZTRkNjY5/NTViMjgxYzczNTIx/NjRiNjM4N2E1YmE3/ZGQ0OGEwYjY0M2Iz/M2Y0NjU1ZWI3ODZj/ZmE0NmYuc3Zn.svg" alt="" w="40px"/>
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>Add payment details</Text>
              </HStack>

              <HStack p={'15px'} my={'20px'} bg={theme ? 'gray.800' : "gray.200"} borderRadius={'15px'}><BsFillInfoCircleFill size={'20px'} />
                <Text px={'10px'} fontSize={{ base: "14px", md: "16px", lg: '16px' }} fontWeight={'400'} color={theme ? 'white' : 'blackAlpha.800'}>This is a secure and SSL encrypted payment. Your credit card details are safe.</Text>
              </HStack>
              <Box>
                <Text py={'10px'} fontSize={'16px'} >Select your payment method:</Text>
                {CardPay && (
                <Box boxShadow={'md'} border={'1px solid silver'} bg={theme ? '#191b1d' : 'white'} borderRadius={'15px'}>
                  <HStack borderBottom={'1px solid silver'} p={'15px'} borderRadius={'15px 15px 0 0 '}><GrRadialSelected size={'20px'} color={'blue'} />
                    <Text px={'10px'} fontSize={'16px'} fontWeight={'400'} color={theme ? 'white' : 'blackAlpha.800'}>Pay by card</Text>
                    <Spacer />
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU'
                      width='5%' height='5%' mt='22px' ml='30px' />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
                      width='7%' height='7%' mt='16px' ml='0px' />
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU'
                      width='4%' height='4%' mt='20px' mr='20px' />
                  </HStack>

                  <Box p={'20px 15px 30px 15px'}>
                    <Flex direction={'column'}>
                      <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "125px", paddingLeft: "5px" }}>Cardholder Name</label>
                      <Input autoComplete='on' onChange={(e)=>{setformdata({...formdata, c_holder:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} />
                    </Flex>
                    <Flex direction={'column'} my={'20px'}>
                      <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "110px", paddingLeft: "5px" }}>Card Number *</label>
                      <Input autoComplete='on' onChange={(e)=>{setformdata({...formdata, c_number:e.target.value})}} w={{ base: "80%", md: "45%", lg: "45%" }} size='lg' border={'1px solid silver'} placeholder='**** **** **** ****' />
                    </Flex>

                    <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "95px", paddingLeft: "3px" }}>Expiry Date *</label>
                        <Input onChange={(e)=>{setformdata({...formdata, exp_day:e.target.value})}} w={"100%"} size='lg' border={'1px solid silver'} placeholder='MM / YY' />
                      </Flex>
                      <Flex direction={'column'} w={{ base: "60%", md: "20%", lg: "20%" }} ml={{ base: "0%", md: '5%', lg: "5%" }} mt={{ base: "15px", md: "0px", lg: "0px" }}>
                        <label style={{ marginBottom: '-10px', marginLeft: "15px", fontSize: "14px", fontWeight: "700", backgroundColor: theme ? '#191b1d' : 'white', zIndex: "4", width: "45px", paddingLeft: "3px" }}>CVV *</label>
                        <Input  onChange={(e)=>{setformdata({...formdata, cvv:e.target.value})}} w={"100%"} size='lg' border={'1px solid silver'} placeholder='1 2 3' />
                      </Flex>
                    </Flex>
                  </Box>
                </Box>

              )}
                
                {/* Razorpay Payment */}
                <Text><br/></Text>

                {/* <Box boxShadow={'md'} border={'1px solid silver'} bg={theme ? '#191b1d' : 'white'} borderRadius={'15px'}> */}

                {RazorPay && (
                <RadioGroup onChange={handleRadioChange2}>
                 <HStack direction="column">
                  <Radio value="option2">Card Pay</Radio>
                 </HStack>
               </RadioGroup>
               )}
                {CardPay && (
                <RadioGroup onChange={handleRadioChange}>
                 <HStack direction="column">
                  <Radio value="option2">Razor Pay</Radio>
                 </HStack>
               </RadioGroup>
               )}
      
                
                  
                {/* </Box> */}

                {/* {CardPay && ( */}
                <Box mt={'20px'}>
                  <Flex>
                    <Checkbox size='md' onChange={()=>{setchk(!chk)}}></Checkbox>
                    <Text pl={'15px'} mt={'45px'} fontSize={{ base: "14px", md: "16px", lg: '16px' }}>I accept Adventour's <span style={{ color: "#008cc9" }}>Terms & Conditions</span>  and <span style={{ color: "#008cc9" }}> Privacy Policy;</span> and
                      Realistic Journey's <span style={{ color: "#008cc9" }}> payment,cancellation and refund conditions,</span> and <span style={{ color: "#008cc9" }}>Credit for Future Tours <br /> Terms & Conditions.</span>
                    </Text>
                  </Flex>
                </Box>
                
                {CardPay && (  <Button isDisabled={!chk} w={'100%'} onClick={() => {
                  
                  if(!formdata.first_N || !formdata.last_N || !formdata.title || !formdata.email || !formdata.phone || !formdata.day || !formdata.month || !formdata.year || !formdata.gender || !formdata.nationality || !formdata.c_holder || !formdata.c_number || !formdata.exp_day || !formdata.cvv){
                    toast({
                      title: 'Please fill all details',
                      status: 'warning',
                      position: 'top',
                      duration: 3000,
                      isClosable: true,
                    });
                  }

                  
                }} colorScheme='none' bg={'#1ca0e3'} py={'30px'} mt={'30px'}>Book Spaces</Button> )}

{/* onClick={handlePayment} */}

     {RazorPay && (
        <Button isDisabled={!chk}  w={'100%'} onClick={() => {
          
          if(!formdata.first_N || !formdata.last_N || !formdata.title || !formdata.email || !formdata.phone || !formdata.day || !formdata.month || !formdata.year || !formdata.gender || !formdata.nationality){
            toast({
              title: 'Please fill all details',
              status: 'warning',
              position: 'top',
              duration: 3000,
              isClosable: true,
            });
          }else{
            handlePayment();
          }

          
        }}  colorScheme='none' bg={'#008cc9'} py={'30px'} mt={'30px'}>Pay Now</Button>         
      )}

                 {/* )} */}
                <Modal isOpen={isOpen} >
                  <ModalOverlay />
                  <ModalContent w={'350px'} top={'22%'} py={'30px'}>
                    <ModalBody >
                      <VStack>
                        <Text fontSize={'25px'} fontWeight={'600'}>OTP Verification</Text>
                        <Text fontSize={'15px'}>Thank You for booking on Adventour.</Text>
                        <Text fontSize={'15px'} pb={'20px'}>Enter the OTP shared with you.</Text>
                        <HStack mt={3} mx={3} >
                          <PinInput>
                            <PinInputField onChange={(e) => { setpin({ ...pin, first: e.target.value }) }} />
                            <PinInputField onChange={(e) => { setpin({ ...pin, sec: e.target.value }) }} />
                            <PinInputField onChange={(e) => { setpin({ ...pin, third: e.target.value }) }} />
                            <PinInputField onChange={(e) => { setpin({ ...pin, fourth: e.target.value }) }} />
                          </PinInput>
                        </HStack>
                        <HStack>
                          <Text fontSize={'12px'} pt={'15px'} >Not received OTP, Click here to </Text>
                          <Text onClick={() => {
                            toast({
                              description: "Your OTP is 5637",
                              status: 'warning',
                              position: 'top',
                              duration: 3000,
                              isClosable: true,
                            });

                          }} color={'blue.400'} fontWeight={'500'} fontSize={'12px'} pt={'15px'} cursor={'pointer'}>
                            RESEND
                          </Text>
                        </HStack>
                      </VStack>
                    </ModalBody>
                    <Button colorScheme='blue' m={5} onClick={() => {
                      onClose();
                      if (pin.first == 5 && pin.sec == 6 && pin.third == 3 && pin.fourth == 7) {
                        navigate('/payment-successful')
                        console.log("Pay Ok")
                      } else {
                        toast({
                          description: "Payment failed",
                          status: 'error',
                          position: 'top',
                          duration: 3000,
                          isClosable: true,
                        });
                      }
                    }}>
                      Enter OTP
                    </Button>
                  </ModalContent>
                </Modal>

                <Box w={'50%'} m={'auto'} textAlign={'center'} mt={'20px'}>
                  <Text fontSize={'13px'} fontWeight={'700'}>
                    No booking fees! <span style={{ fontWeight: "500" }}>You will be charged</span> ₹{(dueNext)?.toLocaleString("en-US")} <span style={{ fontWeight: "500" }}>now.
                      The remaining balance is due on</span> 1 Jul, 2023.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box display={{ base: "block", md: "block", lg: "none" }}>
              <Pricediv theme={theme} storedata={storedata} traveller={traveller} />
            </Box>
            <Box my={'25px'} p={'20px'} borderRadius={'15px'} bg={theme ? '#191b1d' : 'white'} boxShadow={'md'}>
            <HStack>
                {/* <BsFill4SquareFill size={'30px'} /> */}
                <Image src="https://imgs.search.brave.com/EiV9Szig0FglGnxUkj-NLwzuqgO6hu3QqQBZsYwzLzc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvb25saW5lLWNv/dXJzZS0yLzUxMi90/ZXJtcy1jb25kaXRp/b25zLWFncmVlbWVu/dC1hY2NlcHRhbmNl/LTUxMi5wbmc" alt="" w="30px" h="30px" filter={theme ? 'invert(100%)' : 'none'}/>
               <Text mt={'15px'} fontWeight={'700'} fontSize={'17px'}>Terms & Conditions</Text>
              </HStack>
              <Text mt={'25px'} lineHeight={'19px'} fontSize={'13px'}>Adventour is an authorised Agent of Expat Explore Travel. Please familiarise yourself with the Expat Explore Travel payment,
                cancellation and refund policies and Adventour's Terms & Conditions. Adventour will charge you in the stated currency and we do
                not charge any booking fees.
              </Text>
              <Flex justifyContent={'space-between'} w={'70%'} direction={{ base: "column", md: "row", lg: "row" }}>
                <Box lineHeight={'23px'}>
                  <Text mt={'13px'} fontWeight={'700'} fontSize={'15px'}>Operated by Expat Explore Travel</Text>
                  <Text fontSize={'12px'}>London</Text>
                </Box>
                <Box lineHeight={'23px'}>
                  <Text mt={'15px'} fontWeight={'700'} fontSize={'15px'}>Agent: Adventour</Text>
                  <Text fontSize={'12px'}>Kärntner Ring 5-7, Top 304-306</Text>
                  <Text fontSize={'12px'}>1010 Vienna, AUSTRIA</Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* right box */}
          <Box  w={'31%'} display={{ base: "none", md: "none", lg: "block" }}>
            <Box  display={{ base: "none", md: "none", lg: "block" }} p={'20px'} borderRadius={'15px'}  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} boxShadow={'md'} lineHeight={'25px'}>
            <HStack>
            <Image src="https://imgs.search.brave.com/4NRB7KBeY1IHDpbBqYJ-ZMsNbJlSliAiWr43zdWQ5fA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODI2LzgyNjA3/MC5wbmc" alt="" w="30px" h="30px"/>
              <Text pb={'15px'} fontSize={'20px'} fontWeight={'700'}>My Trip</Text>
              </HStack>
              <Text fontSize={'15px'} fontWeight={'600'}>{storedata?.title}</Text>
              {/* <Text pb={'10px'} fontSize={'15px'}>{storedata?.tour_length} days</Text> */}
              <Text fontSize={'15px'} fontWeight={'600'}>Starts in, {start}</Text>
              <Text pb={'10px'} fontSize={'15px'}>Sunday, 20 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Ends in , {end}</Text>
              <Text pb={'10px'} fontSize={'15px'}>Thursday, 31 Aug 2023</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Tour Type</Text>
              <Text pb={'10px'} fontSize={'15px'}>Group</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>Operated in</Text>
              <Text pb={'10px'} fontSize={'15px'}>English</Text>
              <Text fontSize={'15px'} fontWeight={'600'}>What's included</Text>
              <Text pb={'10px'} fontSize={'15px'}>Accommodation, Guide, Meals, Transport</Text>
            </Box>


            <Pricediv theme={theme} dueNext={dueNext} storedata={storedata} traveller={traveller} basepr={basepr} discountVal={discountVal} totalDue={totalDue} />


          </Box>

        </Flex>
      </Box>
    </Box>

    
  )
}

function Pricediv({ theme, storedata, traveller , basepr, discountVal, totalDue, dueNext }) {
  return <Box p={'20px'} my={'25px'} borderRadius={'15px'}  bgGradient={theme ? 'gray.100' : 'linear(to-b, #44c1ff 10%, white 50%)'} boxShadow={'md'} position={'sticky'} top={'20px'}>
     <HStack >
                {/* <BsFill1SquareFill size={'30px'} /> */}
                <Image src="https://img.icons8.com/?size=512&id=13008&format=png" alt="" w="30px" />
                <Text pb={'5px'} fontWeight={'700'} fontSize={'20px'} px={'10px'}>Price Breakdown</Text>
              </HStack>
   
   {/* <Image src="https://img.icons8.com/?size=512&id=13008&format=png" alt="" w="50px"/>
    <Text pb={'20px'} fontSize={'20px'} fontWeight={'700'}>Price Breakdown</Text> */}
    <Flex justifyContent={'space-between'}>
      <Box pb={'14px'}>
        <Text>Base price</Text>
        <Text fontSize={'14px'}>{traveller} Traveller x ₹{(basepr)?.toLocaleString("en-US")}</Text>
      </Box>
      <Text>₹ {(traveller * basepr)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pb={'15px'} borderBottom={'1px solid silver'}>
      <Text>Discount</Text>
      <Text>- ₹ {(traveller * discountVal)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex justifyContent={'space-between'} pt={'20px'}>
      <Text fontWeight={'700'}>Total due</Text>
      <Text fontSize={'20px'} fontWeight={'700'}>₹ {(traveller * totalDue)?.toLocaleString("en-US")}</Text>
    </Flex>
    <Flex lineHeight={'45px'} direction={'column'} mt={'10px'} p={'5px'} bg={theme ? 'gray.800' : 'gray.100'} borderRadius={'10px'}>
      <Flex>
        <Text fontWeight={'700'}>Due today</Text>
        <Spacer />
        <Text fontWeight={'700'}>₹ {(traveller * storedata?.price)?.toLocaleString("en-US")}</Text>
      </Flex>
      <Flex>
        <Text>Due on 1 Jul, 2023</Text>
        <Spacer />
        <Text>₹ {(traveller * dueNext)?.toLocaleString("en-US")}</Text>
      </Flex>
    </Flex>
  </Box>

}

export default Payment
