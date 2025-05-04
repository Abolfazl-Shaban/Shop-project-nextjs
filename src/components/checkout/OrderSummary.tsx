import { useCart } from "@/context/CartContext";
import OrderCart from "./OrderCart";
import { useTranslation } from "react-i18next";

const OrderSummary = () => {
  const { t } = useTranslation();
  const items = useCart()?.getCartItems();
  const count = items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className="mt-4">
      <div className="flex items-center mb-2">
        <h2 className="p-2 font-medium not-md:text-sm">{t("checkout.orderSummary.title")}</h2>
        {count > 0 && (
          <p className="text-xs text-dark-500 font-bold">
            {t("checkout.orderSummary.itemCount", { count })}
          </p>
        )}
      </div>
      <div className="mb-2 rounded-xl text-dark-300 flex flex-wrap gap-2">
        {items?.map((item) => (
          <OrderCart key={item.product.id} cartItem={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
