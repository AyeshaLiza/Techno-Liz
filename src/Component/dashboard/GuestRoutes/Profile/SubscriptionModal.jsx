
const SubscriptionModal = ({ my_modal_5 ,closeModal}) => {
 return (
  <div>

  {/* let [isOpen, setIsOpen] = useState(true) */}


  return (
    <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <p className="py-4">Get Membership Subscription by 5$ only</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )



  </div>
 );
};

export default SubscriptionModal;