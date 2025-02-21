import EatingPlaceList from "../widget/main/eating-place-list";
import EatingPlaceRadioGroup from "../widget/main/eating-place-radio-group";
import EatingPlaceSelect from "../widget/main/eating-place-select";

const Main = () => /* html */ `<main>

    <section class="eating-place-top-section" >
        ${EatingPlaceSelect()}
        ${EatingPlaceRadioGroup()}
    </section>

    <section class="eating-place-bottom-section">
        ${EatingPlaceList()}
    </section>
</main>`;

export default Main;
