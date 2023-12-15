import React from "react";
import Default from "../templates/Default";
import { GlobalContex } from "../../contexts/GlobalContext";
import PaymentPageItem from "../organisms/PaymentPageItem";
import Loading from "../atoms/Loading";
import AddressPaymentPageItem from "../molecules/AddressPaymentPageItem";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "react-bootstrap/Button";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
  const URLConnection = process.env.REACT_APP_API_URL;
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
  const { paymentID, currentUser } = React.useContext(GlobalContex);
  const [paymentData, setPaymentData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [showAddress, setShowAddress] = React.useState(true);
  const [shippingAddress, setShippingAddress] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");

  console.log("id do pagamento", paymentID);
  //6577937f922a400702a02da0
  React.useEffect(() => {
    fetch(`${URLConnection}/purchase/6577937f922a400702a02da0`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentData(data);
        setIsLoading(false);
        setShowAddress(true);
      })
      .catch((err) => console.log(err));
  }, [URLConnection]);

  const makePayment = async () => {
    const stripe = await loadStripe(stripeKey);

    const body = {
      products: paymentData,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${URLConnection}/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  console.log("envio id", shippingAddress);
  console.log("metodo de pagamento", paymentMethod);
  console.log("metodo de pagamento", paymentData);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div>
        <h4>Resumo do pedido</h4>
        {paymentData.products.map((item) => {
          return <PaymentPageItem item={item} key={item.productID} />;
        })}
        <hr />
        <div className="d-flex justify-content-end">
          <div>
            <div>
              <h5>
                Frete{" "}
                {paymentData.shippingPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h5>
            </div>
            <div>
              <h5>
                subtotal{" "}
                {paymentData.subTotalPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h5>
            </div>
            <div>
              <h5>
                Total{" "}
                {paymentData.totalPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h5>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h5>Deseja enviar para qual endereço?</h5>
          <form>
            <div className="form-div shadow rounded-4">
              <fieldset>
                <legend className="">Meus Endereços</legend>
                {!!showAddress && (
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <div className="row">
                        {currentUser.addresses.map((address) => {
                          return (
                            <AddressPaymentPageItem
                              address={address}
                              shippingAddress={shippingAddress}
                              setShippingAddress={setShippingAddress}
                            />
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </FormControl>
                )}
                {!showAddress && (
                  <h6>Você ainda não cadastrou nenhum endereço</h6>
                )}

                <h6>
                  <Link to="/register/address">Adicionar novo endereço?</Link>
                </h6>
              </fieldset>
            </div>
          </form>
        </div>
        <div>
          <h5>Vai utilizar qual método de pagamento?</h5>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div>
                <PixIcon />{" "}
                <FormControlLabel
                  value="pix"
                  control={<Radio />}
                  label="PIX"
                  onClick={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div>
                <CreditCardIcon />
                <FormControlLabel
                  value="creditCard"
                  control={<Radio />}
                  label="Cartão de Crédito"
                  onClick={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
              <div>
                <ReceiptIcon />
                <FormControlLabel
                  value="boleto"
                  control={<Radio />}
                  label="Boleto"
                  onClick={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          variant="primary"
          className="btn btn-primary"
          onClick={makePayment}
        >
          Ir para pagamento
        </Button>
      </div>
    </Default>
  );
}
