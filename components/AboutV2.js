export default function AboutMe() {
  return (
    <div className="">
      <nav>
        <div class="border-b border-gray-200">
          <div
            class="-mb-px flex space-x-8 px-4"
            aria-orientation="horizontal"
            role="tablist"
          >
            <button
              id="tabs-1-tab-1"
              class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
              aria-controls="tabs-1-panel-1"
              role="tab"
              type="button"
            >
              Women
            </button>
            <button
              id="tabs-1-tab-2"
              class="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
              aria-controls="tabs-1-panel-2"
              role="tab"
              type="button"
            >
              Men
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-col">
        <h1>
          {'<'} Dev Blergh!/{'>'}
        </h1>
      </div>
    </div>
  );
}
