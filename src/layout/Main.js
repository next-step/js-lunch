import EatingPlaceList from "../widget/eating-place-list";
import EatingPlaceRadioGroup from "../widget/eating-place-radio-group";
import EatingPlaceSelect from "../widget/eating-place-select";

const Main = () => /* html */ `<main>

    <section class="eating-place-select-and-input-section" >
        ${EatingPlaceSelect()}
        ${EatingPlaceRadioGroup()}
    </section>

    <section class="eating-place-list-section">
        ${EatingPlaceList()}
    </section>
</main>`;

export default Main;
