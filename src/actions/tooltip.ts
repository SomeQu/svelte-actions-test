export function tooltip(node: HTMLElement, text: string) {
  let tooltipElement: HTMLDivElement | null;

  const showTooltip = () => {
    tooltipElement = document.createElement("div");
    tooltipElement.textContent = text;
    tooltipElement.style.position = "absolute";
    tooltipElement.style.background = "#333";
    tooltipElement.style.color = "#fff";
    tooltipElement.style.padding = "5px";
    tooltipElement.style.borderRadius = "5px";
    tooltipElement.style.opacity = "0"; // Начальное состояние - невидимое
    tooltipElement.style.transition = "opacity 0.5s ease-in";
    document.body.appendChild(tooltipElement);

    const { top, left } = node.getBoundingClientRect();

    tooltipElement.style.top = `${top + window.scrollY + node.offsetHeight}px`;
    tooltipElement.style.left = `${left + window.scrollX}px`;

    // Делаем видимым
    requestAnimationFrame(() => {
      if (tooltipElement !== null) {
        tooltipElement.style.opacity = "1";
      }
    });
  };

  const hideTooltip = () => {
    if (tooltipElement) {
      tooltipElement.style.opacity = "0"; // Обратно в невидимое состояние
      tooltipElement.addEventListener(
        "transitionend",
        () => {
          if (tooltipElement) {
            document.body.removeChild(tooltipElement);
            tooltipElement = null;
          }
        },
        { once: true }
      );
    }
  };

  node.addEventListener("mouseenter", showTooltip);
  node.addEventListener("mouseleave", hideTooltip);

  return {
    update(newText: string) {
      text = newText;
      if (tooltipElement) {
        tooltipElement.textContent = text;
      }
    },
    destroy() {
      node.removeEventListener("mouseenter", showTooltip);
      node.removeEventListener("mouseleave", hideTooltip);
      hideTooltip();
    },
  };
}
