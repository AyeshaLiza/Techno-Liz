
const SubscriptionModal = ({ my_modal_5 ,closeModal}) => {

  return (
    <>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <p className="py-4">Get Membership Subscription by 
    <span >50$ only</span></p>
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
};

export default SubscriptionModal;